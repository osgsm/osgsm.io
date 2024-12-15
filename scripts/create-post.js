const fs = require("fs");
const path = require("path");

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

# Article content goes here

`;

    const postsDir = path.join(
      process.cwd(),
      "app",
      "(posts)",
      "blog",
      "posts",
    );
    const filepath = path.join(postsDir, `${filename}.mdx`);

    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }

    // Check if file already exists
    if (fs.existsSync(filepath)) {
      throw new Error(`${filename}.mdx already exists.`);
    }

    fs.writeFileSync(filepath, template, "utf-8");
    console.log(`✅ Created ${filepath}`);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

createPost();
