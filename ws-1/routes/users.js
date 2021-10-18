var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
        /** 
         * Route for registering a user
         * 1. Vo req.body gi primame podatocite prateni po ovoj HTTP request
         * 2. Vo podatocite kje ima: ime, prezime, email, password
         * 3. Tie podatoci, na ovoj endpoint kje gi zacuvame kako nov korisnicki zapis (new user record)
         * 
         * Resenie:
         * 0. Da se povrzeme vo baza preku app.js
         * 1. Da se napravi User model
         * 2. Da se povika funkcija za zapisuvanje nov zapis od User model-ot (users kolekcijata)
         * 3. Da se vrati bilo kakov response
         */
      })
      .post('/', (req, res) => {
        /**
         * Route for logging in an existing user
         * 1. Vo req.body gi primame podatocite prateni po ovoj HTTP request
         * 2. Vo podatocite: email i password
         * 3. So ovie podatoci treba da proverime dali navistina postoi ovoj korisnik
         * 3.1 Ako postoi, da mu ispratime bilo kakov response vo koj kje mu kazeme "OK!"
         * 3.2 Ako ne postoi, da mu ispratime bilo kakov response vo koj kje mu kazeme "Celadae!"
         * 
         * Resenie:
         * Kje si kazete vie.
         */
      })

module.exports = router;

/**
 * JWT: JSON Web Token
 * 
 * Kako kje se odviva procesot na avtentikacija odnosno najavuvanje na korisnikot
 * 
 * 1. Otkako korisnikot kje se logira, odnosno kje vnese email i password koi odgovaraat na korisnik vo bazata
 * 2. API-to na korisnikot mu dava karticka, chip, alka, itn itn int: token
 * 2.1. Token-ot e string od 30-60 karakteri koi kje bidat unikatni za toj korisnik
 * 3. Korisnikot vo sekoj nareden request, ne mora da prakja email i password, zatoa sto go ima tokenot
 * 
 * 4. Kolku dolgo kje mu trae token-ot na korisnikot? Dali ova znaci deka korisnikot kje se najavi ednas, i kje bide
 *    najaven cela godina?
 * 4.1. Sekoj token kje ima oznaceno dadeno vreme na koristenje. Isto kako i vashata alka na festival.
 * 4.1.1. Ako posle toa vreme korisnikot proba da go iskoristi istiot token za da se najavi, kje mu kazeme deka treba da
 *        donese email i password povtorno.
 * 4.1.2 Ako vo tekot na toa vreme korisnikot se najavi so tokenot, tokenot treba da e vazecki.
 * 
 * Enkripcija
 * 
 * Zaev propagja. (ova go prekja Cezar)
 * 
 * -
 * Micko i da go ukrade pismoto
 * -
 * 
 * Piko aseritkg. (ova go dobiva Rodrigez)
 * 
 * 
 * Napisi go tvoeto na list. Sekoja bukva, pomestija so bukvata posle 7 mesta od nea. Taka tekstot kje bide nerazbirliv.
 * No, jas znam deka toa si go napravil, i koga kje go primam pismoto, sekoja bukva, kje ja pomestam za 7 pozicii obratno od tebe.
 * 
 * 1. Kje go enkodirame password-ot na korisnikot i kje mu go pratime vo token
 * 2. Kje enkodirame informacija uste kolku dolgo kje trae tokenot
 * 
 * Od drugata strana
 * 3. Korisnikot kje go primi tokenot, i kje go vrati so sekoj request za da dokaze deka e najaven
 * 4. Koga kje go primime ovoj enkodiran token, kje moze da go napravime obratnoto od cekor 2. Da go dekodirame tokenot.
 * 
 */