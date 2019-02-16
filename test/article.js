//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


let mongoose = require("mongoose");
let Article = require('../models/article.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);

describe('Articles', () => {
  beforeEach((done) => { //Before each test we empty the database
    Article.remove({}, (err) => {
      done();
    });
  });


  /*
  * Test the /GET route
  */
  describe(' Articles', () => {
    describe('/GET Articles', () => {
      it('it should GET all the articles', (done) => {
        chai.request(server)
          .get('/v1/articles')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.articles.should.be.a('array');
            res.body.success.should.be.eql(true);
            done();
          });
      });
    });

    /**
     * Create
     */
    describe('/POST Articles', () => {
      it('it should create an article', (done) => {
        const article = {
          displayName: "Jeans Shoes",
          imageURL: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto/42558d9ef467472f9df4a9b40135248e_9366/bd7682.jpg",
          isCloudinaryImage: true,
          price: 74.95,
          productid: "bd7682",
          reviewCount: "9",
          reviewRating: "4.4444",
          salePrice: 74.95,
          subTitle: "Originals",
          url: "/jeans-shoes/BD7682.html",
        };

        chai.request(server).post('/v1/articles')
          .send(article)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.article.should.be.a('object');
            res.body.article.displayName.should.be.eql('Jeans Shoes');
            res.body.success.should.be.eql(true);
            done();
          });
      });

      it('then it should GET that article', (done) => {
        chai.request(server).get('/v1/articles')
          .end((err, res) => {
            console.log(res.body)
            res.should.have.status(200);
            // res.body.articles[0].displayName.should.be.eql('Jeans Shoes');
            res.body.success.should.be.eql(true);
            done();
          });
      });

    });
  });
});