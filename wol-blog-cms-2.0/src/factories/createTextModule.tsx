// Factory function for TextModule
import React from "react";
import { TextModule } from "../types/moduleTypes";
import { TextPreview } from "@/components/previewComponents"; // Assuming you'll create a preview component
import { TextIcon } from "@/svgs";
import { TextSnippet } from "../snippets";

const createTextModule = (id: number): TextModule => ({
  id,
  title: "Text",
  icon: <TextIcon />,
  snippet: TextSnippet,
  preview: TextPreview,
  elements: {
    paragraphs: {
      title: "paragraph",
      type: "text",
      value: [
        "The huge blue spruce more than doubles the width of the doorframe it’s meant to go through, even with drum-tight ratchet straps keeping the biggest of the limbs in check. From underneath the tree, Jon Koets counts to three, and it starts—a collaborative effort of shoving from outside and pulling from within. Like a hospital delivery room, there’s intense pushing followed by moments of rest. After ten minutes of this, the last of the behemoth tree finally nears the threshold, and it’s clear that one more good push will do it. In years past, this final thrust has put the tree’s trunk clear through the entryway drywall, but this year all goes smoothly.",
        "The decades-old tradition of the Koets’ family giant Christmas tree has grown over the years as it has achieved legend status in the community of Richland, Michigan. Youngest son, Robbie, scouts trees weeks ahead of time with a tape measure. A 25-foot tree is fine, but what he’s really looking for is that eight-foot section somewhere in the middle that looks full, symmetrical, and beautiful. The actual number is 7-foot, 8-inches, which Robbie has calculated to be the maximum size to accommodate the tree and treestand under the family home’s 8-foot ceiling.",
        "In the field earlier in the day, Robbie led his pregnant wife Shelagh, parents Karen and Jon, older brother Josh, and Josh’s partner Kirk, to the two trees he’d scouted—both full, round-shaped spruces about 20 feet high. The family debated the merits of each, but in one in particular Jon saw exactly what he wanted.",
      ],
      icon: <TextIcon />,
    },
  },
});

export default createTextModule;
