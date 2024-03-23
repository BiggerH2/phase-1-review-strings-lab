// Import necessary functions/variables from helpers.js or define them here if needed
const currentUser = "Hope Okoth";
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Export variables correctly using module.exports
module.exports = { currentUser, welcomeMessage, excitedWelcomeMessage, shortGreeting };

describe('index.js', /**
 * This function is used to test the variables and functions defined in index.js
 */
describe('index.js', () => {
  /**
   * The 'currentUser' variable is a string that contains the name of the current user
   */
  describe('currentUser', () => {
    /**
     * This test ensures that the 'currentUser' variable is defined and not empty
     */
    it('is defined', () => {
      expect(currentUser, "The 'currentUser' variable must contain a string").to.be.a('string');
      expect(currentUser, "You need to modify the value of the 'currentUser' variable").to.not.be.empty;
    });
  });

  /**
   * The 'welcomeMessage' variable is a string that contains a welcome message for the current user
   */
  describe('welcomeMessage', () => {
    /**
     * This test ensures that the 'welcomeMessage' variable contains the expected text
     */
    it('contains "Welcome to Flatbook, "', () => {
      expect(welcomeMessage).to.have.string('Welcome to Flatbook, ');
    });

    /**
     * This test ensures that the 'welcomeMessage' variable contains the value of the 'currentUser' variable
     */
    it("contains the value of the 'currentUser' variable", () => {
      expect(welcomeMessage).to.have.string(currentUser);
    });

    /**
     * This test ensures that the 'welcomeMessage' variable ends with an exclamation point!
     */
    it('ends with an exclamation point!', () => {
      expect(welcomeMessage.substr(-1)).to.eq('!');
    });
  });

  /**
   * The 'excitedWelcomeMessage' variable is a string that contains an excited welcome message for the current user
   */
  describe('excitedWelcomeMessage', () => {
    /**
     * This test ensures that the 'excitedWelcomeMessage' variable contains the expected text
     */
    it('contains "WELCOME TO FLATBOOK, "', () => {
      expect(excitedWelcomeMessage).to.have.string('WELCOME TO FLATBOOK, ');
    });

    /**
     * This test ensures that the 'excitedWelcomeMessage' variable contains the value of the 'currentUser' variable in uppercase
     */
    it("contains the value of the 'currentUser' variable", () => {
      const upperCaseCurrentUser = currentUser.toUpperCase();

      expect(excitedWelcomeMessage).to.have.string(upperCaseCurrentUser);
    });

    /**
     * This test ensures that the 'excitedWelcomeMessage' variable ends with an exclamation point
     */
    it('ends with an exclamation point', () => {
      expect(excitedWelcomeMessage.substr(-1)).to.eq('!');
    });
  });

  /**
   * The 'shortGreeting' variable is a string that contains a short greeting for the current user
   */
  describe('shortGreeting', () => {
    /**
     * This test ensures that the 'shortGreeting' variable contains the expected text
     */
    it(`contains "Welcome, "`, () => {
      expect(shortGreeting).to.have.string('Welcome, ');
    });

    /**
     * This test ensures that the 'shortGreeting' variable contains the first initial of the name stored in the 'currentUser' variable
     */
    it("contains the first initial of the name stored in the 'currentUser' variable", () => {
      const firstInitial = currentUser[0];
      const restOfName = currentUser.slice(1);

      expect(shortGreeting).to.have.string(firstInitial);
      expect(shortGreeting).to.not.have.string(restOfName);
    });

    /**
     * This test ensures that the 'shortGreeting' variable ends with an exclamation point
     */
    it('ends with an exclamation point', () => {
      expect(shortGreeting.substr(-1)).to.eq('!');
    });
  });
}));