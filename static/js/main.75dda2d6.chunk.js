(this["webpackJsonpfive-second-game"]=this["webpackJsonpfive-second-game"]||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var a,o,i=n(1),A=n.n(i),s=n(6),r=n.n(s),m=n(2),g=n.p+"static/media/hourglass.910fe327.png",c=n(3),d=n(0),h=c.a.div(a||(a=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #d9b44a;\n  background-color: #4f6457;\n  margin: 20px;\n  border-radius: 25px;\n"]))),l=c.a.img(o||(o=Object(m.a)(["\n  height: 50px;\n  width: 50px;\n  margin: 0 20px;\n"])));function u(){return Object(d.jsxs)(h,{children:[Object(d.jsx)(l,{src:g,alt:"hourglass"}),Object(d.jsx)("h1",{children:"5 second game"}),Object(d.jsx)(l,{src:g,alt:"hourglass"})]})}var b=n(4),N=n(5),p=n(18),f=n.n(p),j=n.p+"static/media/UIPopUpSound.1c9167e6.wav",O=n.p+"static/media/fiveSecondBeepSound.00b6c093.wav",v=n.p+"static/media/correctSound.6840a195.wav",y=n.p+"static/media/wrongSound.e2d2c19d.wav",B=!1,Q={UIPopUp:new Audio(j),fiveSecondBeep:new Audio(O),correct:new Audio(v),wrong:new Audio(y)},x={UIPopUp:.5,fiveSecondBeep:1,correct:1,wrong:.1};function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x[e];if(!B){var n=Q[e];n.volume=t,n.play()}}var E,I,H,w=n.p+"static/media/mutedSpeaker.444f1638.png",D=c.a.button(E||(E=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 2.5em;\n  width: 2.5em;\n  padding: 0px;\n  margin: 0px;\n  background-image: url ('/image/btn.png') no-repeat;\n\n  img {\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    position: absolute;\n    border-radius: 10px;\n  }\n"])));function k(){var e=Object(i.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(d.jsx)(D,{onClick:function(){B=!B,n&&C("UIPopUp"),a(!n)},children:n?Object(d.jsx)("img",{src:w,alt:"speaker"}):Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA5ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMS0yMzwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD40YTk1NDU5OS0wZGEzLTRlMzgtOWI3Zi0xMTM5NmRjYzExMGI8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+UiBDaGVuPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRv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"})})}var J=c.a.div(I||(I=Object(m.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  paddding: 0px;\n  border-radius: 20px;\n  background-color: #acd0c0;\n  margin: 0 20px 20px 0;\n"]))),X=c.a.div(H||(H=Object(m.a)(["\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n"])));function z(e){var t=Object(i.useContext)(ge),n=t.players,a=t.gameBegun,o=Object(b.a)(n,2),A=o[0],s=o[1],r=Object(b.a)(a,2)[1],m=Object(i.useState)(""),g=Object(b.a)(m,2),c=g[0],h=g[1];return Object(d.jsxs)(J,{children:[Object(d.jsxs)(X,{children:[Object(d.jsx)("h3",{children:"Add Players"}),Object(d.jsx)(k,{})]}),Object(d.jsx)(X,{children:Object(d.jsxs)("form",{onSubmit:function(e){if(C("UIPopUp",.5),e.preventDefault(),!(0===c.length||A.length>=12)){var t={id:f()(),name:c,score:0,tiebreaker:0};s((function(e){return[].concat(Object(N.a)(e),[t])})),h("")}},children:[Object(d.jsx)("input",{onChange:function(e){h(e.target.value)},type:"text",value:c,maxLength:"15",placeholder:"Enter name for player"}),Object(d.jsx)("button",{type:"submit",children:" Add Player"})]})}),Object(d.jsx)(X,{children:Object(d.jsx)("button",{onClick:function(){C("UIPopUp"),A.length<2?alert("Must have at least 2 players to start game!"):r(!0)},children:" Start Game "})})]})}var P,R,Z,S,G,Y,M=n(13),F=["Name 3 things that are normally white.","Name 3 things that are normally black.","Name 3 things that are normally yellow.","Name 3 things that are pink.","Name 3 things that you find at a church.","Name 3 things that you tie.","Name 3 tools.","Name 3 winter clothing items.","Name 3 summer clothing items.","Name 3 things you can see in the sky at day.","Name 3 things that begin with 'B'.","Name 3 things that begin with 'G'.","Name 3 things that are funny.","Name 3 best presents.","Name 3 worst presents.","Name 3 free things.","Name 3 things that you pop.","Name 3 things that smell bad.","Name 3 types of jewelry.","Name 3 things you might find in the garage.","Name 3 things that cost less than $1.","Name 3 things that cost more than $100000.","Name 3 things with buttons.","Name 3 things with stripes.","Name 3 things with zips.","Name 3 things in your room that begin with T.","Name 3 things in a toolbox.","Name 3 things you put in the car.","Name 3 things that come in pairs.","Name 3 metals.","Name 3 things that create a lot of noise.","Name 3 things that you can breakfast.","Name 3 parts of a bicycle.","Name 3 things that can you find in a bag.","Name 3 triangular objects.","Name 3 round objects.","Name 3 red foods.","Name 3 things you can find in the bedroom.","Name 3 places you can become a regular at.","Name 3 things that have locks.","Name 3 objects you might find in a garden.","Name 3 car manufacturers.","Name 3 brands of computers.","Name 3 electrical appliances.","Name 3 types of fish.","Name 3 famous animals.","Name 3 bones of the body.","Name 3 birds.","Name 3 animals that growl.","Name 3 animals that are herbivores.","Name 3 insects.","Name 3 animals that would make bad pets.","Name 3 zoo animals.","Name 3 farm animals.","Name 3 flowers.","Name 3 baby animals.","Name 3 mythical creatures.","Name 3 animals that growl.","Name 3 animals that start with 'D'.","Name 3 mathematical symbols.","Name 3 universities.","Name 3 degrees.","Name 3 numbers that add up to 1000.","Name 3 elements from the periodic table.","Name 3 countries in Africa.","Name 3 capital cities.","Name 3 types of weather.","Name 3 states in America.","Name 3 countries starting with M.","Name 3 international airports.","Name 3 countries in South America.","Name 3 landmarks.","Name 3 honeymoon destinations.","Name 3 big rivers in the world.","Name 3 boy names begnning with D.","Name 3 girl names beginning with D.","Name 3 boy names beginning with A.","Name 3 girl names beginning with A.","Name 3 boy names beginning with B.","Name 3 boy names beginning with L.","Name 3 girl names beginning with L.","Name 3 famous Johns.","Name 3 famous female athletes.","Name 3 famous criminals.","Name 3 American Presidents.","Name 3 monarchs.","Name 3 actors.","Name 3 actresses.","Name 3 cartoon characters.","Name 3 bands.","Name 3 superheroes.","Name 3 famous bald people.","Name 3 millionaires.","Name 3 comedians.","Name 3 famous chefs.","Name 3 inventors.","Name 3 famous blondes.","Name 3 celebrities with tattoos.","Name 3 famous people with glasses.","Name 3 famous female singers.","Name 3 famous male singers.","Name 3 assassinated world leaders.","Name 3 of your bad habits.","Name 3 TV shows you have never watched.","Name 3 sitcoms.","Name 3 social media sites.","Name 3 books that were turned into films.","Name 3 TV game shows.","Name 3 reality TV shows.","Name 3 movie villains.","Name 3 animal characters on TV.","Name 3 Mario characters.","Name 3 musicials.","Name 3 Disney films.","Name 3 comedy shows.","Name 3 Matt Damon movies.","Name 3 movies with Dwayne Johnson.","Name 3 TV shows that came out in the last year.","Name 3 movies that were a complete waste of time.","Name 3 breakfast foods.","Name 3 foods you have to peel before eating.","Name 3 foods that are sweet.","Name 3 things made of chocolate.","Name 3 things you put ketchup on.","Name 3 foods that can be used in the bedroom.","Name 3 types of chocolate bars.","Name 3 things you might eat at a barbeque.","Name 3 things you buy at a bakery.","Name 3 Chinese foods.","Name 3 foods that take less than 2 minutes to make.","Name 3 things you would like to accomplish in your lifetime.","Name 3 superpowers that you would like to have.","Name 3 people who live on your street.","Name 3 things you do before going to bed.","Name 3 things you do after waking up.","Name 3 apps that you use.","Name 3 things you do while no one is looking.","Name 3 people that you would date.","Name 3 jobs you never want to have.","Name 3 streets near your home.","Name 3 people that you want to date.","Name 3 pet peeves.","Name 3 songs that annoy you.","Name 3 things that make your laugh.",'Name 3 things that make you go "woooohoooo!".',"Name 3 things that annoyed your parents.","Name 3 things you do before going to bed.","Name 3 things you do after waking up.","Name 3 things you do at the weekend.","Name 3 places that you can go skiing.","Name 3 things you should not do at a wedding.","Name 3 things you would do in front of a fire.","Name 3 things you can't do in the dark.","Name 3 excuses for not doing your homework.","Name 3 things you do at Christmas.","Name 3 phobias.","Name 3 reasons to get fired.","Name 3 romantic getaways.","Name 3 wedding destinations.","Name 3 things bridesmaids do.","Name 3 ways to propose.","Name 3 things groomsmen do.","Name 3 date night activities.","Name 3 things you need to plan a wedding.","Name 3 reasons to get married.","Name 3 things you do when you are angry.","Name 3 things you can do with your eyes closed.","Name 3 sports where jumping is involved.","Name 3 winter activities.","Name 3 summer activities.","Name 3 terrible jobs.","Name 3 things to do on your birthday.","Name 3 ways you can disguise yourself.","Name 3 ways to make money.","Name 3 sporting trophies.","Name 3 jobs that are dangerous.","Name 3 things many people only do once a week.","Name 3 sports that don't use a ball.","Name 3 sports where something is thrown.","Name 3 things you aren't allowed to do at a job interview.","Name 3 games children play on the playground.","Name 3 words that rhyme with date.","Name 3 words that begin with 'ap'.","Name 3 words that end in 'ful'.","Name 3 words with more 8 letters.","Name 3 french words.","Name 3 idioms or proverbs.","Name 3 Christmas traditions.","Name 3 Christmas songs.","Name 3 Christmas ornaments.","Name 3 dances.","Name 3 love songs.","Name 3 clothes shops."],T=n(20),L=c.a.div(P||(P=Object(m.a)(["\n  flex-grow: 1;\n  text-align: center;\n\n  button {\n    font-size: 1.5em;\n  }\n"]))),W=c.a.span(R||(R=Object(m.a)(["\n  font-size: 6em;\n  color: #4f6457;\n"])));function K(e){var t=Object(i.useState)(5),n=Object(b.a)(t,2),a=n[0],o=n[1],A=Object(i.useState)("readying"),s=Object(b.a)(A,2),r=s[0],m=s[1];return Object(d.jsxs)(L,{children:["readying"===r&&Object(d.jsx)("button",{onClick:function(){var e=new T.a;o(5),e.on("tick",(function(e){var t=Math.round(e/1e3);o(t)})),e.on("done",(function(){m("finished")})),m("countingDown"),C("fiveSecondBeep"),e.start(5e3)},children:" Ready "}),"countingDown"===r&&Object(d.jsx)(W,{children:a}),"finished"===r&&Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){e.handleCorrect(),m("readying")},children:"\u2714\ufe0f"}),Object(d.jsx)("button",{onClick:function(){m("readying"),e.handleWrong()},children:"\u274c"}),Object(d.jsx)("p",{children:"Time's up!"})]})]})}var q,V=c.a.div(Z||(Z=Object(m.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  paddding: 0px;\n  border-radius: 20px;\n  align-items: center;\n  background-color: #acd0c0;\n  margin: 0 20px 20px 0;\n  position: relative;\n"]))),U=c.a.div(S||(S=Object(m.a)(["\n  height: 26%;\n  display: flex;\n  align-items: ",";\n"])),(function(e){return e.alignment||"center"})),$=Object(c.a)(U)(G||(G=Object(m.a)(["\n  height: 37%;\n"]))),_=c.a.div(Y||(Y=Object(m.a)(["\n  font-size: 2em;\n"])));function ee(){var e=Object(i.useContext)(ge).players,t=Object(b.a)(e,2),n=t[0],a=t[1],o=n.length,A=Object(i.useState)(1),s=Object(b.a)(A,2),r=s[0],m=s[1],g=Object(i.useState)([]),c=Object(b.a)(g,2),h=c[0],l=c[1];Object(i.useEffect)((function(){var e=Object(N.a)(F);e.sort((function(){return Math.random()-.5})),l(e)}),[]);var u=(r-1)%o,p=n[u];function f(){m((function(e){return e+1}))}return Object(d.jsxs)(V,{children:[Object(d.jsxs)(U,{children:[Object(d.jsxs)("h3",{children:[p.name,"'s Turn!"]}),Object(d.jsx)(k,{})]}),Object(d.jsx)($,{children:Object(d.jsx)(_,{children:h[r]})}),Object(d.jsx)($,{alignment:"top",children:Object(d.jsx)(K,{handleCorrect:function(){C("correct"),function(){var e=Object(N.a)(n),t=Object(M.a)(Object(M.a)({},e[u]),{},{score:p.score+1,tiebreaker:r});e[u]=t,a(e)}(),f()},handleWrong:function(){C("wrong"),f()}})})]})}var te,ne,ae=c.a.div(q||(q=Object(m.a)(["\n  margin: 5px;\n  color: #acd0c0;\n  .white {\n    color: white;\n  }\n  .right {\n    float: right;\n    margin-right: 10px;\n    color: #d9b44a;\n  }\n  button {\n    height: 1rem;\n    font-size: 1em;\n    padding: 10 -10px;\n  }\n"]))),oe=Object(i.forwardRef)((function(e,t){var n=e.player,a=n.id,o=n.name,i=n.score;n.tiebreaker;return Object(d.jsx)(ae,{ref:t,children:Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"white",children:o}),Object(d.jsx)("span",{className:"right",children:i})]})},a)})),ie=n(19),Ae=c.a.div(te||(te=Object(m.a)(["\n  width: 200px;\n  border-radius: 20px;\n  text-align: center;\n  background-color: #4f6457;\n  h3 {\n    color: #d9b44a;\n  }\n  ol {\n    padding: 10px 10px 20px 30px;\n  }\n  margin: 0 20px 20px 20px;\n"])));function se(e){var t=Object(i.useContext)(ge).players,n=Object(b.a)(t,1)[0],a=Object(N.a)(n);return a.sort((function(e,t){return e.score===t.score?t.tiebreaker-e.tiebreaker:t.score-e.score})),Object(d.jsxs)(Ae,{children:[Object(d.jsx)("h3",{children:"Scoreboard"}),Object(d.jsx)(ie.a,{typeName:"ol",duration:500,children:a.map((function(e,t){return Object(d.jsx)(oe,{player:e},e.id)}))})]})}var re,me=c.a.div(ne||(ne=Object(m.a)(["\n  display: flex;\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  button {\n    background-color: #75b1a9;\n    margin: 10px;\n    font-size: 16px;\n    padding: 5px;\n    border-radius: 10px;\n  }\n  input {\n    font-size: 16px;\n  }\n"]))),ge=A.a.createContext();function ce(){var e=Object(i.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)(!1),A=Object(b.a)(o,2),s=A[0],r=A[1];return Object(d.jsx)(ge.Provider,{value:{players:[n,a],gameBegun:[s,r]},children:Object(d.jsxs)(me,{children:[Object(d.jsx)(se,{}),s?Object(d.jsx)(ee,{}):Object(d.jsx)(z,{})]})})}var de=c.a.div(re||(re=Object(m.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #75b1a9;\n  font-family: 'McLaren', cursive;\n"])));function he(){return Object(d.jsxs)(de,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(ce,{})]})}r.a.render(Object(d.jsx)(he,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.75dda2d6.chunk.js.map