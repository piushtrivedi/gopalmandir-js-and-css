var adblock=new Array()
adblock[0]='<a href="http://www.matangimatrimonial.blogspot.com" target="_blank"><img src="http://dl.dropbox.com/u/14422613/Gopal%20Mandir%20Jhabua%20Files/new%20ad%2010-04-2011/9999.gif" width="160" height="600" class="imgBorder" alt="Matangi Vivah"></a>'
adblock[1]='<a href="http://www.gopalmandirjhabua.blogspot.com" target="_blank"><img src="http://dl.dropbox.com/u/14422613/Gopal%20Mandir%20Jhabua%20Files/new%20ad%2010-04-2011/anigif.gif" width="160" height="600" class="imgBorder" width="202" height="43" alt="Gopal Mandir"></a>'
adblock[2]='<a href="http://www.matangidarshan.blogspot.com" target="_blank"><img src="http://dl.dropbox.com/u/14422613/Gopal%20Mandir%20Jhabua%20Files/5.gif" width="160" height="600" class="imgBorder" width="202" height="43" alt="Matangi Darshan"></a>'
adblock[3]='<a href="http://www.gopalmandirjhabua.blogspot.com" target="_blank"><img src="http://dl.dropbox.com/u/14422613/Gopal%20Mandir%20Jhabua%20Files/6.gif" width="160" height="600" class="imgBorder" alt="Gopal Mandir"></a>'
adblock[4]='<a href="http://www.matangidarshan.blogspot.com" target="_blank"><img src="http://dl.dropbox.com/u/14422613/Gopal%20Mandir%20Jhabua%20Files/new%20ad%2010-04-2011/matangi.gif" width="160" height="600" class="imgBorder" width="202" height="43" alt="Matangi Darshan"></a>'
adblock[5]='<a href="http://www.gopalmandir-publication.blogspot.com" target="_blank"><img src="http://dl.dropbox.com/u/14422613/Gopal%20Mandir%20Jhabua%20Files/bookad.gif" width="160" height="600" class="imgBorder" alt="Book Publication"></a>'
adblock[6]='<a href="http://www.rishikul-jhabua.blogspot.com" target="_blank"><img src="http://dl.dropbox.com/u/14422613/Gopal%20Mandir%20Jhabua%20Files/new%20ad%2010-04-2011/rishikul.gif" width="160" height="600" class="imgBorder" width="202" height="43" alt="Rishikul Jhabua"></a>'

function randomorder(targetarray, spacing) {
  var randomorder=new Array()
  var the_one
  var z=6
  for (i=0;i<targetarray.length;i++)
  randomorder[i]=i

  while (z<targetarray.length) {
    the_one=Math.floor(Math.random()*targetarray.length)
    if (targetarray[the_one]!="_selected!"){
      document.write(targetarray[the_one]+spacing)
      targetarray[the_one]="_selected!"
      z++
    }
  }
}