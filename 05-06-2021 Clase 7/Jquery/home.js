const agregarDivJquery = (event) => {
  event.preventDefault();
  let key = `div-p-${idItemsJquery++}`;

  let element = `
  <div id='${key}'>testing
    <button onclick="removeElementWithAnimationJquery('#${key}')">
        x
    </button>
  </div>`;
  addElementJquery("body", element);
};
