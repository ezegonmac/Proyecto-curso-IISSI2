"use strict";
import { commentsSectionRenderer } from "/js/renderers/comments_section.js";
import { comments } from "/js/renderers/comments.js";

// RENDERER
let commentsSection = commentsSectionRenderer.asList(comments);

let container = document.querySelector("#comments-section");
container.appendChild(commentsSection);
