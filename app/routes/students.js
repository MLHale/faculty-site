/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-08-16T07:33:12-05:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: students.js
 * @Last modified by:   matthale
 * @Last modified time: 2019-10-10T23:50:36-05:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Route from '@ember/routing/route';
import { A } from '@ember/array';

var curr_students = A([
    {
        firstname: 'Aaron',
        lastname: 'Vigal',
        type: 'UG',
        description: 'Aaron works on the Cybertrust project - developing tooling for experimentation and user training. He has previously worked on the GenCyber as an intern to help facilitate the CTF and other events.',
        img: 'img/aaron.jpg',
        link: 'https://aaronvigal.com/',
        years: '2018-',
    },


]);

var former_students = A([
    {
        firstname: 'Gabi',
        lastname: 'Wethor',
        type: 'PhD',
        description: 'Gabi works on the Cybertrust project. She is developing data fusion and analysis techniques for understanding why end users fall prey to phishing attacks. She completed her Master\'s thesis in 2018. It piloted a study to explore the effects of user engagement through aesthetically/visually interesting stimuli on victimization.',
        img: 'img/gabi.jpg',
        link: '',
        years: '2017-2019',
    },
    {
        firstname: 'Isaac',
        lastname: 'Shrestha',
        type: 'MS',
        description: 'Isaac worked on the SecuWear project. He is focused on building a visualization interface and analytics that improves data visibility and faciliates security analysis across the components involved in a wearable or IoT application.',
        img: 'img/isaac.jpg',
        link: '',
        years: '2016-2018',
    },
    {
        firstname: 'Nikhit',
        lastname: 'Adusumilli',
        type: 'MS',
        description: 'Nikhit worked both on the SecuWear and Cybertrust projects. With SecuWear, he has built the prototype visualization interface and data streaming hooks that can be dropped into mobile apps and ubertooth to facilitate data capture. On Cybertrust, Nikhit is working on the user-facing frontend and the training interface to provide training to victimized users.',
        img: 'img/nikhit.jpg',
        link: '',
        years: '2016-2018',
    },
    {
        firstname: 'Mickey',
        lastname: 'Hefley',
        type: 'MS',
        description: 'Mickey worked on the Cybertrust project. He is designing an administrative data management interface for experiment design. He is also augmenting the platform with data capture techniques focused on gathering user interaction data during experimentation.',
        img: 'img/mickey.jpg',
        link: '',
        years: '2016-2017',
    },
    {
        firstname: 'Kerolos',
        lastname: 'Lotfy',
        type: 'MS',
        description: 'Kerolos worked on the SecuWear Project. He analyzed the Bluetooth Low Energy protocol and commercial wearable communications for vulnerabilities.',
        img: 'img/kerolos.jpg',
        link: '',
        years: '2015-2016',
    },

]);

export default Route.extend({
  model(){
    return {"current": curr_students.sortBy('lastname'), "former": former_students.sortBy('lastname')};
  }
});
