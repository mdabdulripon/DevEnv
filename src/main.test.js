import { expect } from 'chai';
// import jsdom from 'jsdom';
// import fs from 'fs';

describe('Our first test', function() {
    it('should pass', function(done) {
        expect(true).to.equal(true);
        done();
    });
});

// describe('test for index.html', function() {
//     it('should have title', function(done) {
//         const index = fs.readFileSync('./src/index.html', 'utf-8');
//         jsdom.env(index, function(err, window) {
//             const h1 = window.document.getElementsByTagName('h1')[0];
//             expect(h1.innerHTML).to.equal('title');
//             done();
//             window.close();
//         });
//     });
// });