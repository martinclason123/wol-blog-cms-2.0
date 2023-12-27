// Factory function for TextModule
import React from "react";
import { TextModule } from "../types/moduleTypes";
import { TextPreview } from "@/components/previewComponents"; // Assuming you'll create a preview component
import { TextIcon } from "@/svgs";

const createTextModule = (id: number): TextModule => ({
  id,
  title: "Text",
  icon: <TextIcon />,
  preview: TextPreview,
  elements: {
    paragraph: {
      title: "paragraph",
      type: "text",
      value:
        "The huge blue spruce more than doubles the width of the doorframe it’s meant to go through, even with drum-tight ratchet straps keeping the biggest of the limbs in check. From underneath the tree, Jon Koets counts to three, and it starts—a collaborative effort of shoving from outside and pulling from within. Like a hospital delivery room, there’s intense pushing followed by moments of rest. After ten minutes of this, the last of the behemoth tree finally nears the threshold, and it’s clear that one more good push will do it. In years past, this final thrust has put the tree’s trunk clear through the entryway drywall, but this year all goes smoothly.",
      icon: <TextIcon />,
    },
  },
});

export default createTextModule;
