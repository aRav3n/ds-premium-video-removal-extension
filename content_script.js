function placeIntoParentDiv(childDiv) {
  const newParentDiv = document.querySelector(
    "div.ds-browse-page__videos > div.ds-browse-videos"
  );
}

function deletePremiumVideos() {
  const allVideoDivs = document.querySelectorAll(".ds-browse-videos__video");
  for (let videoDiv of allVideoDivs) {
    const premiumLink = videoDiv.querySelector('a[href="/premium"]');
    if (premiumLink) {
      videoDiv.remove();
    } else {
    }
  }
}

function setGridParent() {
  let gridParent;

  if (!gridParent) {
    const parent = document.querySelector(
      "#root > .ds-app > .ds-content-area > .ds-scrollable-area > .ds-page.ds-browse-page > .ds-browse-page__videos > .ds-browse-videos"
    );
    if (parent && parent !== undefined) {
      gridParent = parent;
      gridParent.setAttribute("id", "grid-parent");
      return gridParent;
    }
  }
  return null;
}

function runCode() {
  const gridParent = setGridParent();
  if (gridParent) {
    console.log(gridParent);
  }
  // deletePremiumVideos();
  // rearrangeVideos();
}

window.addEventListener("load", () => {
  runCode();
});

window.addEventListener("change", () => {
  runCode();
});
