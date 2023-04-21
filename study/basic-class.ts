class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

class Greeting {
  name!: string;
}

const firstName = new Greeting();
firstName.name = "chu";
