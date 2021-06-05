const addElementJquery = (element, tag) => {
  $(element).append(tag);
};
const removeElementWithAnimationJquery = (idTag) =>
  $(idTag)
    .animate({
      left: "250px",
      opacity: "0.5",
      height: "150px",
      width: "150px",
    })
    .hide("slow");
