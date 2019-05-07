////////////////////////////////////////////////////////////////////////////////
//                            Pirate Ship Battles                             //
//                                                                            //
//                               Server - Stone                               //
////////////////////////////////////////////////////////////////////////////////


const SAT = require('sat');
const unique = require('node-uuid');

module.exports = class Stone {
  constructor (x, y, max_x, max_y) {
    try {
      if (x < 0 || x >= max_x) throw "x must be non-negative or smaller than max_x";
      if (y < 0 || y >= max_y) throw "y must be non-negative or smaller than max_y";

      this.x = x;
      this.y = y;
      this.hp = 7;
      this.id = unique.v4();
      this.collision_poly = new SAT.Polygon(new SAT.Vector(this.x, this.y), [
        new SAT.Vector(-34, -41),
        new SAT.Vector(24, -41),
        new SAT.Vector(50, -2),
        new SAT.Vector(34, 31),
        new SAT.Vector(10, 27),
        new SAT.Vector(-22, 40),
        new SAT.Vector(-50, 9),
      ]);
    } catch(err) {
      console.log("Stone constructor: " + err);
    }
  }
}
