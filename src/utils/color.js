const linkColor = (value, lightValue) => {
  return `
    color: ${value};
    &:hover {
      color: ${lightValue};
    }
  `;
};

export { linkColor };
