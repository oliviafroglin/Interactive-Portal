//import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState } from "react";
import Faq from "react-faq-component";
import Data from './Data';
const Questions = () => {
  const data = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet?",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Und was ist, wenn der Satz länger ist ... Geht es dann einfach weiter"
      },
    ],

  }
  const data2 = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet?",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Und was ist, wenn der Satz länger ist ... Geht es dann einfach weiter"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Wie sollen wir arbeite?",
        content: "Ich habe auch keine Ahnung"
      }
    ],

  }
  const data3 = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet?",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Und was ist, wenn der Satz länger ist ... Geht es dann einfach weiter"
      },
    ],

  }
  const data4 = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet?",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Und was ist, wenn der Satz länger ist ... Geht es dann einfach weiter"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Wie sollen wir arbeite?",
        content: "Ich habe auch keine Ahnung"
      }
    ],

  }
  const data5 = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet?",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Und was ist, wenn der Satz länger ist ... Geht es dann einfach weiter"
      },
    ],

  }
  const data6 = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet?",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Und was ist, wenn der Satz länger ist ... Geht es dann einfach weiter"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Wie sollen wir arbeite?",
        content: "Ich habe auch keine Ahnung"
      }
    ],

  }

  const getData = rows => {
    let content = [];
    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];
      content.push(<li key={rows.title}>{rows.content}</li>);
    }
    return content;
  };
  return (
    <div>
      <Header />
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <script src="js/jquery-1.7.1.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/bootstrap-transition.js"></script>
       
      </head>
      <h2 className="header-text">Frequently Asked Questions page </h2>
      <body>
        <h2>What is Humanities Research Lab?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <h2>Start With Our Tutorials</h2>
        
        <div class="container-fluid">
          <div class="row">
            <div class="flex-box">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="item active">
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/GxqR6p8r6z0">
                    </iframe>
                  </div>
                  <div class="item">
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/nSbvlktToSY">
                    </iframe>
                  </div>

                  <div class="item">
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/nSbvlktToSY">
                    </iframe>
                  </div>
                </div>

                <a class="carousel-control left" href="#myCarousel" data-slide="prev" onclick="$('#myCarousel').carousel('prev')" >
                  <span class="glyphicon glyphicon-chevron-left" ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control right" href="#myCarousel"  data-slide="next" onclick="$('#myCarousel').carousel('next')">
                  <span class="glyphicon glyphicon-chevron-right" ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              {/* <div id="desc" style={{ color: 'white' }}>
                <h3>Description</h3>
              </div> */}
            </div>
          </div>
        </div>
      </body>
      <h2>FAQ</h2>
      <div class="btn-group">
      <button class="button">
      <a href="#firstSec"> General Course Questions </a>
      </button>
      <button class="button">
      <a href="#secondSec"> Data Selection Problems </a>
      </button>
      <button class="button">
      <a href="#thirdSec"> Data Visualization Distribution </a>
      </button>
      <button class="button">
      <a href="#fourSec"> Data Visualization Correlation </a>
      </button>
      <button class="button">
      <a href="#fivSec"> Data Visualization Time </a>
      </button>
      <button class="button">
      <a href="#sixSec"> Data Visualization Space </a>
      </button>
      </div>
      <div id='firstSec'>
        <h2>General Course Questions</h2>
      </div>
      <Faq
        data={data}

      />
      <div id='secondSec'>
        <h2>Data Selection Problems</h2>
      </div>
      <Faq
        data={data2}

      />
      <div id='thirdSec'>
        <h2>Data Visualization Distribution</h2>
      </div>
      <Faq
        data={data3}
      />
      <div id='fourSec'>
        <h2>Data Visualization Correlation</h2>
      </div>
      <Faq
        data={data4}

      />
      <div id='fivSec'>
        <h2>Data Visualization Time</h2>
      </div>
      <Faq
        data={data5}

      />
      <div id='sixSec'>
        <h2>Data Visualization Space</h2>
      </div>
      <Faq
        data={data6}

      />
      <div className="block">
        <p className="full-text">Contact us through email or your instructor:</p>
        <p className="full-text"> HRL@nyu.edu</p>
      </div>
    </div>

  );
}

export default Questions;