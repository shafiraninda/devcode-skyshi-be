'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('activities', [
      {
        "email":"fhendriks0@abc.net.au",
        "title":"Marketing Assistant",
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "email":"mrucklesse1@netvibes.com",
        "title":"Accounting Assistant IV",
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "email":"gcovino2@cloudflare.com",
        "title":"Marketing Manager",
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {"email":"hvoak3@nyu.edu","title":"Occupational Therapist", "created_at": new Date(),"updated_at": new Date() },
      {"email":"smcguinley4@hexun.com","title":"Speech Pathologist", "created_at": new Date(),"updated_at": new Date() },
      {"email":"skaret5@gravatar.com","title":"Human Resources Manager", "created_at": new Date(),"updated_at": new Date() },
      {"email":"jporrett6@over-blog.com","title":"Electrical Engineer", "created_at": new Date(),"updated_at": new Date() },
      {"email":"kaylmore7@meetup.com","title":"Financial Advisor", "created_at": new Date(),"updated_at": new Date() },
      {"email":"bsimmell8@ed.gov","title":"GIS Technical Architect", "created_at": new Date(),"updated_at": new Date() },
      {"email":"rfreear9@dell.com","title":"Marketing Manager", "created_at": new Date(),"updated_at": new Date() },
      {"email":"inervala@sciencedirect.com","title":"Administrative Officer", "created_at": new Date(),"updated_at": new Date() },
      {"email":"rmerrydewb@walmart.com","title":"Research Nurse", "created_at": new Date(),"updated_at": new Date() },
      {"email":"kliepinsc@ftc.gov","title":"Assistant Manager", "created_at": new Date(),"updated_at": new Date() },
      {"email":"hallawayd@jimdo.com","title":"Pharmacist", "created_at": new Date(),"updated_at": new Date() },
      {"email":"jbremleye@blinklist.com","title":"Safety Technician III", "created_at": new Date(),"updated_at": new Date() }
      ], {});

      await queryInterface.bulkInsert('todos', [
        {"title":"Other Boleyn Girl, The","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Wipers Times, The","activity_group_id":1, "created_at": new Date(),"updated_at": new Date()},
        {"title":"I Confess","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"So Much Water","activity_group_id":10, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Man on a Mission: Richard Garriott's Road to the Stars","activity_group_id":1, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Brainstorm","activity_group_id":4, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Happy Here and Now","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Sune på bilsemester","activity_group_id":15, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Dennis the Menace","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Live Free or Die Hard","activity_group_id":13, "created_at": new Date(),"updated_at": new Date()},
        {"title":"For Love of the Game","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Frankenstein and the Monster from Hell","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"2019: After the Fall of New York","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Faith School Menace?","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Comme un chef","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"If It's Tuesday, This Must Be Belgium","activity_group_id":15, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Doppelganger (Dopperugengâ)","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Acacia","activity_group_id":4, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Make Mine Music","activity_group_id":8, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Blood and Wine (Blood & Wine)","activity_group_id":5, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Wyatt Earp's Revenge","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Metsän tarina","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Hellboy","activity_group_id":4, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Yo Yo (Yoyo)","activity_group_id":5, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Metalstorm: The Destruction of Jared-Syn","activity_group_id":13, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Star Wars: Episode I - The Phantom Menace","activity_group_id":9, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Legally Blonde 2: Red, White & Blonde","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Drama/Mex","activity_group_id":4, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Fifty-Fifty (a.k.a. Schizo) (Shiza)","activity_group_id":4, "created_at": new Date(),"updated_at": new Date()},
        {"title":"From the Earth to the Moon","activity_group_id":15, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Room 237","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Ratko: The Dictator's Son (National Lampoon's Ratko: The Dictator's Son)","activity_group_id":4, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Close My Eyes","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Carnages (a.k.a. Carnage)","activity_group_id":15, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Pi","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Force of Evil","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Terror, The","activity_group_id":10, "created_at": new Date(),"updated_at": new Date()},
        {"title":"China O'Brien","activity_group_id":1, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Zombieland","activity_group_id":2, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Terminator 2: Judgment Day","activity_group_id":13, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Great Ecstasy of Robert Carmichael, The","activity_group_id":9, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Adventures of Zatoichi (Zatôichi sekisho yaburi) (Zatôichi 9)","activity_group_id":13, "created_at": new Date(),"updated_at": new Date()},
        {"title":"That Touch of Mink","activity_group_id":10, "created_at": new Date(),"updated_at": new Date()},
        {"title":"You're Telling Me!","activity_group_id":15, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Tokyo Twilight (Tôkyô boshoku)","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Hollywood Knights, The","activity_group_id":5, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Cutting Edge: Going for the Gold, The","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Konga","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"This Girl's Life","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Casting By","activity_group_id":9, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Runaway","activity_group_id":8, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Caretakers, The","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Youth in Revolt","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Polyester","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Imagine That","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Red Heat","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Thanksgiving Family Reunion (National Lampoon's Holiday Reunion)","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Clonus Horror, The","activity_group_id":14, "created_at": new Date(),"updated_at": new Date()},
        {"title":"After Midnight","activity_group_id":14, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Star Wars: Episode II - Attack of the Clones","activity_group_id":8, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Assault of the Sasquatch (Sasquatch Assault)","activity_group_id":8, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Kids in the Hall: Brain Candy","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Public Enemy, The","activity_group_id":9, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Dark Skies","activity_group_id":1, "created_at": new Date(),"updated_at": new Date()},
        {"title":"The World Forgotten","activity_group_id":10, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Dancing at the Blue Iguana","activity_group_id":7, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Heart of a Dog (Sobachye serdtse)","activity_group_id":14, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Ladies in Retirement","activity_group_id":5, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Nude Nuns with Big Guns","activity_group_id":14, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Cherry Falls","activity_group_id":8, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Night Watch (Nochnoy dozor)","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Personal Effects","activity_group_id":10, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Man Who Saves the World, The (Dünyayi Kurtaran Adam)","activity_group_id":2, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Admiral","activity_group_id":14, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Prelude to a Kiss","activity_group_id":9, "created_at": new Date(),"updated_at": new Date()},
        {"title":"South Pacific","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Hood of the Living Dead","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Sea Wolves, The","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Mater and the Ghostlight","activity_group_id":4, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Café de Flore","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Female Perversions","activity_group_id":13, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Beyond Tomorrow (Beyond Christmas)","activity_group_id":15, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Cost of Oil: Voices from the Arctic, The","activity_group_id":10, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Scotland, Pa.","activity_group_id":12, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Hell's Highway","activity_group_id":6, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Napoléon","activity_group_id":1, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Gardenia","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Hungarian Fairy Tale, A (Hol volt, hol nem volt)","activity_group_id":12, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Rosewood Lane","activity_group_id":10, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Crossing Over","activity_group_id":15, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Rollercoaster","activity_group_id":10, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Shadows and Fog","activity_group_id":5, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Fighting Elegy (Kenka erejii)","activity_group_id":4, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Rainmaker, The","activity_group_id":11, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Carrie","activity_group_id":1, "created_at": new Date(),"updated_at": new Date()},
        {"title":"29th Street","activity_group_id":13, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Substance: Albert Hofmann's LSD, The","activity_group_id":12, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Botched","activity_group_id":1, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Hell Baby","activity_group_id":15, "created_at": new Date(),"updated_at": new Date()},
        {"title":"Space","activity_group_id":3, "created_at": new Date(),"updated_at": new Date()}
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('activities', null, {});
    await queryInterface.bulkDelete('todos', null, {});
  }
};
