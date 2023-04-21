const keys = {
  d: { pressed: false },
  q: { pressed: false },
  s: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowLeft: { pressed: false },
  ArrowDown: { pressed: false },
};

function golemMinotaurCollision({ body1, body2 }) {
  if (
    (body1.position.x < body2.position.x && body1.dirX === 1) ||
    (body1.position.x > body2.position.x && body1.dirX === -1)
  ) {
    return (
      body1.attackBox.position.x + body1.attackBox.width >= body2.position.x &&
      body1.attackBox.position.x <= body2.position.x + body2.width &&
      body1.attackBox.position.y + body1.attackBox.height >= body2.position.y &&
      body1.attackBox.position.y <= body2.position.y + body2.height
    );
  }
}
