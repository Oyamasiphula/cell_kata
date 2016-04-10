var assert = require('assert');

var functionsImports = require('../kata');

describe("BURNERS AND EARNERS", function(){

      it('should find the typeof person() as function', function(){
    	    var expected = "function";
          var result = functionsImports.person;

      assert.equal(expected, typeof(result));
        // still need to give my test a good structure
      });

      it('should find the first user Data List', function(){
          var expected = [ 'username: Walter', 'data: 67' ];
          var result = functionsImports.get1StUserData();

	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });

      it('should find the second user Data List', function(){
          var expected = [ 'username: Jesse', 'data: 300' ];

          var result = functionsImports.get2ndUserData();

	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });

      it('should find the third user Data List', function(){
          var expected = [ 'username: Saul', 'data: 283' ];
          var result = functionsImports.get3rdUserData();

	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });

      it('should find the fourth user Data List', function(){
          var expected = [ 'username: Gus', 'data: 150' ];
          var result = functionsImports.get4thUserData();

	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });
      it('should find the user with the highest data consumed by social network', function(){
          var expected = {"username": "Jesse", "data": 300};
          var result = functionsImports.getHighestUserDataConsumed();

	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });
      it('should find the user with the least data consumed by social network', function(){
          var expected = {"username": "Walter",
                          data: 67
                        };

          var result = functionsImports.getHighestUserDataConsumed();

	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });
      it('should find a user with more apps than other users', function(){
          var expected = {"username": "Jesse" };

          var result = functionsImports.getUserWithMostApps();

	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });
      it('should find Faceblock users', function(){
          var expected = {"username": "Walter",
                          "username": "Jesse",
                          "username": "Saul"
          };

          var result = functionsImports.getFaceblockUsers();
	      assert.deepEqual(expected, result);
      });

      it("should find a user which isn't using Faceblock", function(){
          var expected = {"username": "Walter"
          };

          var result = functionsImports.getHighestUserDataConsumed();
	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });

      it("should return estimated data consumed by each app", function(){
          // var expected = {};

          var result = functionsImports.getDataConsumedByEachApp();

	      assert.deepEqual(expected, result);
        // still need to give my test a good structure
      });
  });
