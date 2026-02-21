// // Inheritance
// class Vehicle {
//   // constructor
//   constructor(name, color, wheels) {
//     this.name = name;
//     this.color = color;
//     this.wheels = wheels;
//   }
//   // methods
//   getDetails() {
//     console.log(`
//         The ${this.name} is ${this.color} in color.
//         It has ${this.wheels} wheels.`);
//   }
// }

// class Car extends Vehicle {
//   constructor(color, brand, purpose) {
//     super("car", color, 4);
//     this.brand = brand;
//     this.purpose = purpose;
//   }
//   getDetails() {
//     console.log(`
//         The ${this.name} is ${this.color} in color of ${this.brand} company. It has ${this.wheels} wheels and it's purpose is ${this.purpose}.
//         `);
//   }
// }

// const car1 = new Car("Red", "Auddi", "Luxury Travelling");
// const car2 = new Car("Brown", "Benz", "Premium");

// car1.getDetails();
// car2.getDetails();


class Media {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  getTitle() {
    return this.title;
  }
  getArtist() {
    return this.artist;
  }
  getDuration() {
    return this.duration;
  }
}

class Song extends Media {
  constructor(album, genre) {
    super(title, artist, duration);
    this.album = album;
    this.genre = genre;
  }
  getAlbum() {
    return this.album;
  }
  getGenre() {
    return this.genre;
  }
}

class PopSong extends Song {
  constructor(danceability, energy) {
    super(title, artist, duration, album, genre);
    this.danceability = danceability;
    this.energy = energy;
  }
  getDanceability() {
    return this.danceability;
  }
  getEnergy() {
    return this.energy;
  }
}

class RockSong extends Song {
  constructor(distortion, tempo) {
    super(title, artist, duration, album, genre);
    this.distortion = distortion;
    this.tempo = tempo;
  }
  getDistortion() {
    return this.distortion;
  }
  getTempo() {
    return this.tempo;
  }
}

class Podcast extends Media {
  constructor(host, topic) {
    super(title, artist, duration);
    this.host = host;
    this.topic = topic;
  }
  getHost() {
    return this.host;
  }
  getTopic() {
    return this.topic;
  }
}

class NewsPodcast extends Podcast {
  constructor(source) {
    super(host, topic);
    this.source = source;
  }
  getSource() {
    return this.source;
  }
  getDuration() {
    return this.duration;
  }
}

class ComedyPodcast extends Podcast {
  constructor(comedian, rating) {
    super(source);
    this.comedian = comedian;
    this.rating = rating;
  }
  getComedian() {
    return this.comedian;
  }
  getRating() {
    return this.rating;
  }
}