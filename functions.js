function switchContent(type, elem) {
  $("a").removeClass("active-u");
  $("a").addClass("default-u");
  $(elem).removeClass("default-u");
  $(elem).addClass("active-u");

  let data = {};
  if (type === 0) {
    data.img = "images/illustration-features-tab-1.svg";
    data.head = "Bookmark in one click";
    data.content =
      "Organise your bookmarks however you like. Our simple drag-and-drop interface gives you a complete control over how you manage your favorite sites.";
  } else if (type === 1) {
    data.img = "images/illustration-features-tab-2.svg";
    data.head = "Intelligent search";
    data.content =
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
  } else {
    data.img = "images/illustration-features-tab-3.svg";
    data.head = "Share your bookmarks";
    data.content =
      "Easily share your bookmarks and collections with others. Create shareable link that you can send at the click of the button.";
  }

  $("#img_content").attr("src", data.img);
  $("#head_content").text(data.head);
  $("#text_content").text(data.content);
}

function toggleContent(type) {
  let img = $("#img_" + type).attr("src");
  if (img === "images/icon-arrow.svg") {
    $("#img_" + type).attr("src", "images/icon-arrow-red.svg");
    $("#span_" + type).css("color", "red");
  } else {
    $("#img_" + type).attr("src", "images/icon-arrow.svg");
    $("#span_" + type).css("color", "#212529");
  }

  $("#text_" + type).toggle();
}

function changeSvg(pathID) {
  $("#" + pathID).css({ fill: "red" });
}

function switchClass(elem) {
  $("a").removeClass("btn btn-danger");
  $("a").addClass("nav-link");
  $(elem).removeClass("nav-link");
  $(elem).addClass("btn btn-danger");
}
