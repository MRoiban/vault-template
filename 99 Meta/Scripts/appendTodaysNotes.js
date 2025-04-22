// Module-scoped persistence of pinned files
let pinnedFiles = [];

async function appendTodaysNotes(tp) {
  const today = tp.date.now("YYYY-MM-DD");
  const dailyNote = `LOG ${today}.md`; // Adjust if your daily note naming differs
  const notesFolder = "01 Fleeting"; // Adjust to your notes folder path
  const dailyNotePath = `08 LOG/${dailyNote}`;

  // Add Templater utilities
  const templaterPlugin = app.plugins.plugins['templater-obsidian'];
  const tpFunctions = templaterPlugin.templater.current_functions_object;
  const templateFile = tpFunctions.file.find_tfile('99 Meta/Templates/New_log.tmp');

  const allFiles = app.vault.getMarkdownFiles();

  // Regex to detect frontmatter block
  const fmRegex = /^---\s*[\s\S]*?\n---\s*\n?/;

  // Determine today's notes
  const todaysNotes = allFiles.filter(file => {
    const ctime = file.stat.ctime;
    const fileDate = window.moment(ctime).format("YYYY-MM-DD");
    return fileDate === today && file.name !== dailyNote;
  });

  // Refresh existing pinnedFiles: remove if pin:false
  for (let i = pinnedFiles.length - 1; i >= 0; i--) {
    const f = pinnedFiles[i];
    const txt = await app.vault.read(f);
    const match = txt.match(fmRegex);
    if (!match || !/pin:\s*true/.test(match[0])) {
      pinnedFiles.splice(i, 1);
    }
  }

  // Add any new pins from today's notes
  for (const file of todaysNotes) {
    const txt = await app.vault.read(file);
    const match = txt.match(fmRegex);
    if (match && /pin:\s*true/.test(match[0]) && !pinnedFiles.find(x => x.path === file.path)) {
      pinnedFiles.push(file);
    }
  }

  // Merge today's notes with persistent pinned files
  const notesToAppend = [...todaysNotes];
  for (const f of pinnedFiles) {
    if (!notesToAppend.find(x => x.path === f.path)) {
      notesToAppend.push(f);
    }
  }

  let dailyNoteFile = app.vault.getAbstractFileByPath(dailyNotePath);
  // Replace manual creation via vault.create with Templater create_new
  const fileExists = Boolean(dailyNoteFile);
  if (!fileExists) {
    await tpFunctions.file.create_new(templateFile, `LOG ${today}`, false, '08 LOG');
    dailyNoteFile = app.vault.getAbstractFileByPath(dailyNotePath);
  }

  let currentContent = "";
  if (dailyNoteFile) {
    currentContent = await app.vault.read(dailyNoteFile);
  }

  let aggregatedContent = "";

  for (const note of notesToAppend) {
    const rawContent = await app.vault.read(note);

    // Remove frontmatter if present
    const frontmatterRegex = /^---\s*\n[\s\S]*?\n---\s*\n?/;
    const contentWithoutFrontmatter = rawContent.replace(frontmatterRegex, '').trim();

    // Skip notes with no meaningful content
    if (!contentWithoutFrontmatter) continue;

    const transclusion = `![[${note.basename}]]`;

    // Check if the transclusion already exists in the daily note
    if (!currentContent.includes(transclusion)) {
      aggregatedContent += `\n\n## ${note.basename}\n\n${transclusion}`;
    }
  }

  if (aggregatedContent) {
    if (dailyNoteFile) {
      await app.vault.modify(dailyNoteFile, currentContent + aggregatedContent);
    } else {
      console.error(`Daily note not found: ${dailyNotePath}`);
    }
  } else {
    console.log("No new notes to append today.");
  }
}

module.exports = appendTodaysNotes;
