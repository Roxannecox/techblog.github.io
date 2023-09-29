// The Container Div
var conDiv = document.createElement("div");
conDiv.id = "mainDiv";
document.getElementById("theBody").appendChild(conDiv);
// The Navbar
var navBar = document.createElement("nav");
navBar.id = "theNav";
document.getElementById("mainDiv").appendChild(navBar);

// logo
var techBody = document.createElement("span");
techBody.id = "logo1";
techBody.innerHTML = "Tech Blog";
document.getElementById("theNav").appendChild(techBody);

// links
var uList = document.createElement("div");
uList.id = "theList";
document.getElementById("theNav").appendChild(uList);
// a's
var list1 = document.createElement("a");
list1.id = "listOne";
list1.innerHTML = "Home";
document.getElementById("theList").appendChild(list1);

var list2 = document.createElement("a");
list2.id = "listTwo";
list2.innerHTML = "Blog";
document.getElementById("theList").appendChild(list2);

var list3 = document.createElement("a");
list3.id = "listThree";
list3.innerHTML = "Articles";
document.getElementById("theList").appendChild(list3);

var list4 = document.createElement("a");
list4.id = "listFour";
list4.innerHTML = "About Us";
document.getElementById("theList").appendChild(list4);

var list5 = document.createElement("a");
list5.id = "listFive";
list5.innerHTML = "FAQ";
document.getElementById("theList").appendChild(list5);

// Icon logos span
// Icon logos
var Icons = document.createElement("span");
Icons.id = "socialIcons";
document.getElementById("theNav").appendChild(Icons);

// Facebook
var f = document.createElement("IMG");
f.setAttribute("src", "img1.png");
f.setAttribute("width", "30");
f.setAttribute("height", "30");
f.setAttribute("alt", "Facebook");
Icons.appendChild(f);
// Twitter
var t = document.createElement("IMG");
t.setAttribute("src", "img2.png");
t.setAttribute("width", "30");
t.setAttribute("height", "30");
t.setAttribute("alt", "X app");
Icons.appendChild(t);
// Instagram
var i = document.createElement("IMG");
i.setAttribute("src", "img3.png");
i.setAttribute("width", "30");
i.setAttribute("height", "30");
i.setAttribute("alt", "Instagram");
Icons.appendChild(i);

// SECTION2
var sect2 = document.createElement("div");
sect2.id = "sectTwo";
document.getElementById("mainDiv").appendChild(sect2);

var x = document.createElement("IMG");
x.setAttribute("src", "img4.png");
x.setAttribute("width", "100");
x.setAttribute("height", "100");
x.setAttribute("alt", "Tech Blog");
sect2.appendChild(x);

var Tech = document.createElement("h1");
Tech.id = "Blog";
Tech.innerHTML = "Tech Blog";
document.getElementById("sectTwo").appendChild(Tech);

var lorem = document.createElement("p");
lorem.id = "loremIpsum";
lorem.innerHTML = "Accusamus ea excepturi hic impedit iste neque soluta, sunt tempore voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
document.getElementById("sectTwo").appendChild(lorem);

var botton = document.createElement("button");
botton.id = "readMore";
botton.innerHTML = "Read more";
document.getElementById("sectTwo").appendChild(botton);

// SECTION3
var sect3 = document.createElement("div");
sect3.id = "sectThree";
document.getElementById("mainDiv").appendChild(sect3);

// div1
var div1 = document.createElement("div");
div1.id = "article1";
document.getElementById("sectThree").appendChild(div1);
var techno = document.createElement("p");
techno.id = "techNo";
techno.innerHTML = "TECHNOLOGIES";
document.getElementById("article1").appendChild(techno);
var most = document.createElement("h1");
most.id = "mostArt";
most.innerHTML = "Most popular articles";
document.getElementById("article1").appendChild(most);
var para = document.createElement("p");
para.id = "paraG";
para.innerHTML = "Dolor sit amet, consectetur adipisicing elit. Aliquid autem beatae consectetur cumque dolores dolorum enim inventore iure minus nostrum nulla numquam quam quia quod, reprehenderit";
document.getElementById("article1").appendChild(para);
var botton = document.createElement("button");
botton.id = "readMore";
botton.innerHTML = "Read more";
document.getElementById("article1").appendChild(botton);
// div2
var div2 = document.createElement("div");
div2.id = "article2";
document.getElementById("sectThree").appendChild(div2);
var mage1 = document.createElement("IMG");
mage1.setAttribute("src", "img5.jpg");
mage1.setAttribute("width", "450");
mage1.setAttribute("height", "520");
mage1.setAttribute("alt", "Image One");
div2.appendChild(mage1);
// div3
var div3 = document.createElement("div");
div3.id = "article3";
document.getElementById("sectThree").appendChild(div3);
var mage2 = document.createElement("IMG");
mage2.setAttribute("src", "img6.jpg");
mage2.setAttribute("width", "450");
mage2.setAttribute("height", "520");
mage2.setAttribute("alt", "Image Two");
div3.appendChild(mage2);

// SECTION4
var sect4 = document.createElement("div");
sect4.id = "sectFour";
document.getElementById("mainDiv").appendChild(sect4);
// div4
var div4 = document.createElement("div");
div4.id = "divFour";
div4.innerHTML = "Modern compact, perfectly new design";
document.getElementById("sectFour").appendChild(div4);
// linebreak
var lineb = document.createElement("hr");
lineb.id = "lineBreak";
document.getElementById("sectFour").appendChild(lineb);
// div5
var div5 = document.createElement("div");
div5.id = "divFive";
div5.innerHTML = "Numquam, quo recusandae sunt voluptates. Assumenda cumque dolorem eius excepturi inventore laboriosam provident quam suscipit voluptate voluptates.";
document.getElementById("sectFour").appendChild(div5);

// SECTION5
var sect5 = document.createElement("div");
sect5.id = "sectFive";
document.getElementById("mainDiv").appendChild(sect5);
// six row divs
// box1
var div6 = document.createElement("div");
div6.id = "divSix";
document.getElementById("sectFive").appendChild(div6);
var ourwe = document.createElement("h2");
ourwe.id = "ourWeb";
ourwe.innerHTML = "Our website";
document.getElementById("divSix").appendChild(ourwe);
var follow = document.createElement("p");
follow.id = "finnUs";
follow.innerHTML = "Follow us";
document.getElementById("divSix").appendChild(follow);
var bigtech = document.createElement("p");
bigtech.id = "bgTech";
bigtech.innerHTML = "tech@blog.com";
document.getElementById("divSix").appendChild(bigtech);
// box2
var div7 = document.createElement("div");
div7.id = "divSeven";
document.getElementById("sectFive").appendChild(div7);
// box3
var div8 = document.createElement("div");
div8.id = "divEight";
document.getElementById("sectFive").appendChild(div8);
// box4
var div9 = document.createElement("div");
div9.id = "divNine";
document.getElementById("sectFive").appendChild(div9);
// box5
var div10 = document.createElement("div");
div10.id = "divTen";
document.getElementById("sectFive").appendChild(div10);
// box6
var div11 = document.createElement("div");
div11.id = "divEleven";
document.getElementById("sectFive").appendChild(div11);

// SECTION6
var sect6 = document.createElement("div");
sect6.id = "sectSix";
document.getElementById("mainDiv").appendChild(sect6);
// twin ight border divs
var div12 = document.createElement("div");
div12.id = "divTweve";
div12.innerHTML = "Popular-Tech-Blog";
document.getElementById("divTweve")
document.getElementById("sectSix").appendChild(div12);
// box6
var div13 = document.createElement("div");
div13.id = "divThirt";
div13.innerHTML = "Useful-Tech-Blog";
document.getElementById("sectSix").appendChild(div13);

// SECTION7
var sect7 = document.createElement("div");
sect7.id = "sectSeven";
document.getElementById("mainDiv").appendChild(sect7);

// Column1
var div14 = document.createElement("div");
div14.id = "divFurte";
document.getElementById("sectSeven").appendChild(div14);
// image
var m = document.createElement("IMG");
m.setAttribute("src", "img12.jpg");
m.setAttribute("width", "420");
m.setAttribute("height", "350");
m.setAttribute("alt", "Tech Blog");
div14.appendChild(m);
// links
var linky1 = document.createElement("a");
linky1.id = "linkyOne";
linky1.innerHTML = "MOBILE EARBUDS";
document.getElementById("divFurte").appendChild(linky1);
var linky2 = document.createElement("a");
linky2.id = "linkyTwo";
linky2.innerHTML = "Smartphones";
document.getElementById("divFurte").appendChild(linky2);

// Column2
var div15 = document.createElement("div");
div15.id = "divFift";
document.getElementById("sectSeven").appendChild(div15);
// image
var n = document.createElement("IMG");
n.setAttribute("src", "img13.jpg");
n.setAttribute("width", "420");
n.setAttribute("height", "350");
n.setAttribute("alt", "Tech Blog");
div15.appendChild(n);
// links
var linky3 = document.createElement("a");
linky3.id = "linkyThree";
linky3.innerHTML = "MOBILE EARBUDS";
document.getElementById("divFift").appendChild(linky3);
var linky4 = document.createElement("a");
linky4.id = "linkyFour";
linky4.innerHTML = "Bubs";
document.getElementById("divFift").appendChild(linky4);

// Column3 
var div16 = document.createElement("div");
div16.id = "divSixte";
document.getElementById("sectSeven").appendChild(div16);
// image
var p = document.createElement("IMG");
p.setAttribute("src", "img14.jpg");
p.setAttribute("width", "420");
p.setAttribute("height", "350");
p.setAttribute("alt", "Tech Blog");
div16.appendChild(p);
// links
var linky5 = document.createElement("a");
linky5.id = "linkyFive";
linky5.innerHTML = "MOBILE EARBUDS";
document.getElementById("divSixte").appendChild(linky5);
var linky6 = document.createElement("a");
linky6.id = "linkySix";
linky6.innerHTML = "Smart watch";
document.getElementById("divSixte").appendChild(linky6);

// SECTION8
var read1 = document.createElement("div");
read1.id = "readNews1";
document.getElementById("mainDiv").appendChild(read1);

// twin siamese divs
//div17
var inky1 = document.createElement("div");
inky1.id = "inkyOne";
document.getElementById("readNews1").appendChild(inky1);
// Content
// div1
var urnews1 = document.createElement("h2");
urnews1.id = "UrNews1";
urnews1.innerHTML = "Read our news";
document.getElementById("inkyOne").appendChild(urnews1);
// div2
var urnews2 = document.createElement("p");
urnews2.id = "UrNews2";
urnews2.innerHTML = "Consectetur adipisicing elit. Architecto atque culpa eius, error est expedita facilis fuga impedit inventore labore laborum neque obcaecati odit, placeat quo quod repellendus tenetur voluptates.";
document.getElementById("inkyOne").appendChild(urnews2);
// div18
var inky2 = document.createElement("div");
inky2.id = "inkyTwo";
document.getElementById("readNews1").appendChild(inky2);
// button
var more1= document.createElement("button");
more1.id = "Morebutton1";
more1.innerHTML = "Read news";
document.getElementById("inkyTwo").appendChild(more1);

// SECTION9
var bagIm = document.createElement("div");
bagIm.id = "ninthSec";
document.getElementById("mainDiv").appendChild(bagIm);
// div1
var easy = document.createElement("h2");
easy.id = "easyUse";
easy.innerHTML = "Easy to use for everyone";
document.getElementById("ninthSec").appendChild(easy);
// div2
var elit = document.createElement("p");
elit.id = "elitIpsum";
elit.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad autem distinctio, ea eum harum id illo itaque laborum maxime natus quaerat quia quo reiciendis.";
document.getElementById("ninthSec").appendChild(elit);

// SECTION10
var formlist = document.createElement("div");
formlist.id = "formList";
document.getElementById("mainDiv").appendChild(formlist);
// DIV list1
var uform = document.createElement("div");
uform.id = "uForm";
document.getElementById("formList").appendChild(uform);
// DIV link1
var column1 = document.createElement("div");
column1.id = "linkForm1";
document.getElementById("uForm").appendChild(column1);
var proform = document.createElement("a");
proform.id = "proForm1";
proform.innerHTML = "Programming";
document.getElementById("linkForm1").appendChild(proform);
// DIV link2
var column2 = document.createElement("div");
column2.id = "linkForm2";
document.getElementById("uForm").appendChild(column2);
var reform = document.createElement("a");
reform.id = "reForm2";
reform.innerHTML = "Research";
document.getElementById("linkForm2").appendChild(reform);
// DIV link3
var column3 = document.createElement("div");
column3.id = "linkForm3";
document.getElementById("uForm").appendChild(column3);
var devform = document.createElement("a");
devform.id = "devForm3";
devform.innerHTML = "Development";
document.getElementById("linkForm3").appendChild(devform);
// DIV link4
var column4 = document.createElement("div");
column4.id = "linkForm4";
document.getElementById("uForm").appendChild(column4);
var phaform = document.createElement("a");
phaform.id = "phaForm4";
phaform.innerHTML = "Phases";
document.getElementById("linkForm4").appendChild(phaform);
// DIV link5
var column5 = document.createElement("div");
column5.id = "linkForm5";
document.getElementById("uForm").appendChild(column5);
var desform = document.createElement("a");
desform.id = "desForm5";
desform.innerHTML = "Design";
document.getElementById("linkForm5").appendChild(desform);
// DIV list2
var imgform = document.createElement("div");
imgform.id = "imgForm";
document.getElementById("formList").appendChild(imgform);

// SECTION11
var imgtwin = document.createElement("div");
imgtwin.id = "ImgTwin";
document.getElementById("mainDiv").appendChild(imgtwin);
// twin divs
// Image box
var imgdiv = document.createElement("div");
imgdiv.id = "ImgDiv";
document.getElementById("ImgTwin").appendChild(imgdiv);
// review
var review = document.createElement("div");
review.id = "reView";
document.getElementById("ImgDiv").appendChild(review);
// text
var q = document.createElement("IMG");
q.setAttribute("src", "img21.png");
q.setAttribute("width", "40");
q.setAttribute("height", "40");
q.setAttribute("alt", "Reviews");
review.appendChild(q);
var germain = document.createElement("p");
germain.id = "gerMain";
germain.innerHTML = " 'Aliquid architecto ex nemo nulla rerum saepe, sit veritatis. Blanditiis in laboriosam maiores nisi, nostrum officia.' ";
document.getElementById("reView").appendChild(germain);
var jose = document.createElement("p");
jose.id = "joseRich";
jose.innerHTML = "Jose Richardson";
document.getElementById("reView").appendChild(jose);
var artist = document.createElement("h3");
artist.id = "artIst";
artist.innerHTML = "ARTIST";
document.getElementById("reView").appendChild(artist);
// Text box
var blackdiv = document.createElement("div");
blackdiv.id = "blackDiv";
document.getElementById("ImgTwin").appendChild(blackdiv);
var feedback = document.createElement("div");
feedback.id = "feedBack";
document.getElementById("blackDiv").appendChild(feedback);
var fivehun = document.createElement("h1");
fivehun.id = "fiveHun";
fivehun.innerHTML = "500+";
document.getElementById("feedBack").appendChild(fivehun);
var yourfeed = document.createElement("h2");
yourfeed.id = "YourFeed";
yourfeed.innerHTML = "Your feedback";
document.getElementById("feedBack").appendChild(yourfeed);
var textfeed = document.createElement("p");
textfeed.id = "TextFeed";
textfeed.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ea eum eveniet ex explicabo, facilis, incidunt maxime quibusdam quidem quod saepe, tempora temporibus unde. Consectetur dolor id nesciunt placeat reprehenderit.";
document.getElementById("feedBack").appendChild(textfeed); 
var feedbot = document.createElement("button");
feedbot.id = "FeedBot";
feedbot.innerHTML = "Read more";
document.getElementById("feedBack").appendChild(feedbot);

// SECTION12
var twinimg = document.createElement("div");
twinimg.id = "TwinImg";
document.getElementById("mainDiv").appendChild(twinimg);
// twin divs
// Dropdown Container
var drops = document.createElement("div");
drops.id = "dropDiv";
document.getElementById("TwinImg").appendChild(drops);
// The Five Rows
// Row1
var rowone = document.createElement("div");
rowone.id = "row1";
document.getElementById("dropDiv").appendChild(rowone);
// three span div1
// Dropdown 1
var num1 = document.createElement("h2");
num1.id = "Num1";
num1.innerHTML = "01";
document.getElementById("row1").appendChild(num1);
// Dropdown 2
var num2 = document.createElement("a");
num2.id = "Num2";
num2.innerHTML = "Eos exercitationem numquam quaerat asperiores consequuntur?";
document.getElementById("row1").appendChild(num2);
// Dropdown 3
// image
var dropdown1 = document.createElement("IMG");
dropdown1.setAttribute("src", "img22.png");
dropdown1.setAttribute("width", "40");
dropdown1.setAttribute("height", "40");
dropdown1.setAttribute("alt", "Drop-down image");
rowone.appendChild(dropdown1);
// Row2
var rowtwo = document.createElement("div");
rowtwo.id = "row2";
document.getElementById("dropDiv").appendChild(rowtwo);
// three span div1
// Dropdown 1
var num11 = document.createElement("h2");
num11.id = "Num11";
num11.innerHTML = "02";
document.getElementById("row2").appendChild(num11);
// Dropdown 2
var num12 = document.createElement("a");
num12.id = "Num12";
num12.innerHTML = "Praesentium quam quidem repellendus rerum sed totam?";
document.getElementById("row2").appendChild(num12);
// Dropdown 3
// image
var dropdown2 = document.createElement("IMG");
dropdown2.setAttribute("src", "img22.png");
dropdown2.setAttribute("width", "40");
dropdown2.setAttribute("height", "40");
dropdown2.setAttribute("alt", "Drop-down image");
rowtwo.appendChild(dropdown2);
// Row3
var rowthree = document.createElement("div");
rowthree.id = "row3";
document.getElementById("dropDiv").appendChild(rowthree);
// three span div1
// Dropdown 1
var num21 = document.createElement("h2");
num21.id = "Num21";
num21.innerHTML = "03";
document.getElementById("row3").appendChild(num21);
// Dropdown 2
var num22 = document.createElement("a");
num22.id = "Num22";
num22.innerHTML = "Repellendus saepe sapiente sint tempora temporibus vel?";
document.getElementById("row3").appendChild(num22);
// Dropdown 3
// image
var dropdown3 = document.createElement("IMG");
dropdown3.setAttribute("src", "img22.png");
dropdown3.setAttribute("width", "40");
dropdown3.setAttribute("height", "40");
dropdown3.setAttribute("alt", "Drop-down image");
rowthree.appendChild(dropdown3);
// Row4
var rowfour = document.createElement("div");
rowfour.id = "row4";
document.getElementById("dropDiv").appendChild(rowfour);
// three span div1
// Dropdown 1
var num31 = document.createElement("h2");
num31.id = "Num31";
num31.innerHTML = "04";
document.getElementById("row4").appendChild(num31);
// Dropdown 2
var num32 = document.createElement("a");
num32.id = "Num32";
num32.innerHTML = "Sapiente sed soluta temporibus, ullam voluptas voluptatum?";
document.getElementById("row4").appendChild(num32);
// Dropdown 3
// image
var dropdown4 = document.createElement("IMG");
dropdown4.setAttribute("src", "img22.png");
dropdown4.setAttribute("width", "40");
dropdown4.setAttribute("height", "40");
dropdown4.setAttribute("alt", "Drop-down image");
rowfour.appendChild(dropdown4);
// Row5
var rowfive = document.createElement("div");
rowfive.id = "row5";
document.getElementById("dropDiv").appendChild(rowfive);
// three span div1
// Dropdown 1
var num41 = document.createElement("h2");
num41.id = "Num41";
num41.innerHTML = "05";
document.getElementById("row5").appendChild(num41);
// Dropdown 2
var num42 = document.createElement("a");
num42.id = "Num42";
num42.innerHTML = "Moestias repudiandae sint ullam ut voluptate voluptatum?";
document.getElementById("row5").appendChild(num42);
// Dropdown 3
// image
var dropdown5 = document.createElement("IMG");
dropdown5.setAttribute("src", "img22.png");
dropdown5.setAttribute("width", "40");
dropdown5.setAttribute("height", "40");
dropdown5.setAttribute("alt", "Drop-down image");
rowfive.appendChild(dropdown5);

// Img div
var whiteimg = document.createElement("div");
whiteimg.id = "whiteImg";
document.getElementById("TwinImg").appendChild(whiteimg);

// Section 13 - Footer
var footer = document.createElement("div");
footer.id = "FooTer";
document.getElementById("mainDiv").appendChild(footer);
// four divs
// Column1
var col1 = document.createElement("div");
col1.id = "Col1";
document.getElementById("FooTer").appendChild(col1);
// Column1 Contents
// image
var fimage = document.createElement("IMG");
fimage.setAttribute("src", "img4.png");
fimage.setAttribute("width", "50");
fimage.setAttribute("height", "50");
fimage.setAttribute("alt", "Text Blog");
col1.appendChild(fimage);
// h2
var abde = document.createElement("h2");
abde.id = "AbDe";
abde.innerHTML = "Ab debitis dolorem dolorum";
document.getElementById("Col1").appendChild(abde);
// copyright
var copy = document.createElement("h2");
copy.id = "CopyRight";
copy.innerHTML = "© COPYRIGHT 2030 MOBIRISE - ALL RIGHTS RESERVED";
document.getElementById("Col1").appendChild(copy);

// Column2
var col2 = document.createElement("div");
col2.id = "Col2";
document.getElementById("FooTer").appendChild(col2);
// address
var addy1 = document.createElement("p");
addy1.id = "Addy1";
addy1.innerHTML = "Weisgasse 403 87274 Herzogenrath";
document.getElementById("Col2").appendChild(addy1);
var addy2 = document.createElement("p");
addy2.id = "Addy2";
addy2.innerHTML = "98 7654 321 120";
document.getElementById("Col2").appendChild(addy2);
var addy3 = document.createElement("p");
addy3.id = "Addy3";
addy3.innerHTML = "mobi@rise.com";
document.getElementById("Col2").appendChild(addy3);
// Column3
var col3 = document.createElement("div");
col3.id = "Col3";
document.getElementById("FooTer").appendChild(col3);
// Social Media Apps
var media1 = document.createElement("h2");
media1.id = "Media1";
media1.innerHTML = "TWITTER";
document.getElementById("Col3").appendChild(media1)
var media2 = document.createElement("h2");
media2.id = "Media2";
media2.innerHTML = "FACEBOOK";
document.getElementById("Col3").appendChild(media2);
var media3 = document.createElement("h2");
media3.id = "Media3";
media3.innerHTML = "INSTAGRAM";
document.getElementById("Col3").appendChild(media3);
var media4 = document.createElement("h2");
media4.id = "Media4";
media4.innerHTML = "LINKEDIN";
document.getElementById("Col3").appendChild(media4);
// Column4
var col4 = document.createElement("div");
col4.id = "Col4";
document.getElementById("FooTer").appendChild(col4);
var  latintext = document.createElement("h2");
latintext.id = "LatinText";
latintext.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod distinctio eveniet odio maxime, hic voluptate iusto officiis natus ut quis.";
document.getElementById("Col4").appendChild(latintext);