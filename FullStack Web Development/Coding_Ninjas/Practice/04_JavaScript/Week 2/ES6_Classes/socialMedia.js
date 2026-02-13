//Do not alter the starter code.
function main() {
  //Create your class "User" here with all the properties and methods
  class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.posts = [];
    }

    addPost(post) {
      this.posts.push(post);
    }
    deletePost(postTitle) {
      this.posts = this.posts.filter((post) => post.title !== postTitle);
    }
    displayPosts() {
      console.log(`Posts by ${this.name}:`);
      this.posts.forEach((post) => {
        console.log(`- ${post.title}`);
      });
    }
  }

  class Post extends User {
    constructor(name, email, password, title, content, date) {
      super(name, email, password);
      this.title = title;
      this.content = content;
      this.date = date;
      this.likeCount = 0;
    }

    addLike() {
      this.likeCount += 1;
    }

    displayDetails() {
      console.log(`Owner: ${this.name}
        Title: ${this.title}
        Content: ${this.content}
        Date: ${this.date}
        Likes: ${this.likeCount}`);
    }
  }
  //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My first post",
    "Lorem ipsum dolor sit amet",
    "2021-01-01"
  );
  const post2 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My second post",
    "Consectetur adipiscing elit",
    "2021-01-02"
  );

  user1.addPost(post1);
  user1.addPost(post2);

  post1.addLike();
  post1.addLike();

  user1.displayPosts();
  // Output:
  // Posts by John:
  // - My first post
  // - My second post

  post1.displayDetails();
  // Output:
  // Owner: John
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2
  return { User, Post };
}
main();
