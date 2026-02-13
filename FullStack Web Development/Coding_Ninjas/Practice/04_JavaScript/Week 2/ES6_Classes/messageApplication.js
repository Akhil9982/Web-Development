function main() {
  class Message {
    // Define static properties here
    constructor(sender, receiver, messageContent) {
      this.sender = sender;
      this.receiver = receiver;
      this.messageContent = messageContent;
    }

    // Define the constructor to initialize instance variables
    static totalMessages = 0;
    static status = "offline";

    static recordMessage() {
      this.totalMessages++;
    }

    static changeStatus(newStatus) {
      this.status = newStatus;
      console.log(`The status has been changed to ${this.status}`);
    }

    // Define static method to change the status
    sendMessage() {
      console.log(
        `The message '${this.messageContent}' has been sent from '${this.sender} to '${this.receiver}'`
      );
      Message.recordMessage();
    }

    displayDetails() {
      console.log(`Sender: ${this.sender}`);
      console.log(`Receiver: ${this.receiver}`);
      console.log(`Message: ${this.messageContent}`);
      console.log(`Status: ${Message.status}`);
      console.log(`Total Messages: ${Message.totalMessages}`);
    }
    // Define static method to record a message and Increment totalMessages

    // Define instance method to display details
  }

  return Message;
}
