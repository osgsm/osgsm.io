const fs = require("node:fs");
const path = require("node:path");
const { exec } = require("node:child_process");

// Main function
async function createPost() {
  try {
    const filename = process.argv[2];
    if (!filename) {
      throw new Error(
        "Please specify a filename.\nExample: npm run create-post my-new-post",
      );
    }

    const timestamp = new Date().toISOString();
    const template = `---
title: ""
time:
  created: "${timestamp}"
  updated: "${timestamp}"
---

## Article content goes here

`;

    const postsDir = path.join(
      process.cwd(),
      "app",
      "(posts)",
      `${process.argv[3] ?? "blog"}`,
      "posts",
    );
    const filepath = path.join(postsDir, `${filename}.mdx`);

    // Check if file already exists
    if (fs.existsSync(filepath)) {
      throw new Error(`${filename}.mdx already exists.`);
    }

    fs.writeFileSync(filepath, template, "utf-8");
    console.log(`✅ Created ${filepath}`);

    // Open file in Cursor
    exec(`cursor "${filepath}"`, (error) => {
      if (error) {
        console.warn("⚠️ Could not open Cursor automatically:", error.message);
      }
    });
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

createPost();
