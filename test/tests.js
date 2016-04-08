var assert = require("assert");

var users = require('../kata');

describe("BURNERS AND EARNERS", function(){
      it('should find the user with the most data consumed by social Networks', function(){

    	var expected = {'Jesse':'300mb'};

	     var result = users.getMostUserWithMoreDataCons();

	      assert.equal(expected, result);
        // still need to give my test a good structure
      });
  });
