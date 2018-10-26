// Test Case 1
(function () {
  'use strict';

  describe('User chooses to play with X. Test if figure is set to X or O', function () {
      it('should set `game.user` object with span with class `fa fa-times` for X ', function () {

        var id = 'x';
        setFig(id);

        expect(game.user).toContain('fa fa-times');
      });

      it('should set `game.user` object with span with class `fa fa-circle-o` for O ', function () {

          var id = 'o';
          setFig(id);

          expect(game.user).toContain('fa fa-circle-o');
      });
  });

  // Test Case 2
  describe('This test checks if current player can be switched', function () {
      it('should change `game.currentPlayer` to corresponding value (`user`)', function () {

        var player = 'user';
        setCurrPl(player);

        expect(game.currentPlayer).toBe(player);
      });

      it('should change `game.currentPlayer` to corresponding value (`computer`)', function () {

        var player = 'computer';
        setCurrPl(player);

        expect(game.currentPlayer).toBe(player);
      });
  });

  // Test Case 3
  describe('This test checks if player icon is set to right column', function () {
      it('<div id="sixth"> should contain attribute `class="fa fa-times"` for X', function () {

        var column = 'sixth';
        var divSixth = document.createElement('div');
        divSixth.setAttribute('id', column);
        document.body.appendChild(divSixth);

        setFig('x');
        icon(column);

        var element = $('#' + column);

        expect(element.html()).toContain('class="fa fa-times"');
      });

      it('<div id="sixth"> should contain attribute `class="fa fa-circle-o"` for O', function () {

        var column = 'sixth';
        var divSixth = document.createElement('div');
        divSixth.setAttribute('id', column);
        document.body.appendChild(divSixth);

        setFig('o');
        icon(column);

        var element = $('#' + column);

        expect(element.html()).toContain('class="fa fa-circle-o"');
      });
  });
})();
