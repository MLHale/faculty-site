import Route from '@ember/routing/route';
import { A } from '@ember/array';

var curr_students = A([
  {
    firstname: 'Gabi',
    lastname: 'Wethor',
    type: 'MS',
    description: 'Gabi works on the Cybertrust 2.0 project. She is developing data fusion and analysis techniques for understanding why end users fall prey to phishing attacks. She also has an active project focused on combatting human trafficking activities. Her approach is to identify online behaviors indicative of potential trafficking and use them to suggest interdiction activities to law enforcement.',
    img: 'img/gabi.jpg',
    link: '',
  },
  {
    firstname: 'Mickey',
    lastname: 'Hefley',
    type: 'MS',
    description: 'Mickey works on the Cybertrust 2.0 project. He is designing an administrative data management interface for experiment design. He is also augmenting the platform with data capture techniques focused on gathering user interaction data during experimentation.',
    img: 'img/mickey.jpg',
    link: '',
  },
  {
    firstname: 'Isaac',
    lastname: 'Shrestha',
    type: 'MS',
    description: 'Isaac works on the SecuWear project. He is focused on building a visualization interface that improves data visibility and faciliates security analysis across the components involved in a wearable or IoT application.',
    img: 'img/isaac.jpg',
    link: '',
  },
  {
    firstname: 'Nikhit',
    lastname: 'Adusumilli',
    type: 'MS',
    description: 'Nikhit works both on the SecuWear and Cybertrust 2.0 projects. With SecuWear, he has built the prototype visualization interface and data streaming hooks that can be dropped into mobile apps and ubertooth to facilitate data capture. On Cybertrust, Nikhit is working on the user-facing frontend and the training interface to provide training to victimized users.',
    img: 'img/nikhit.jpg',
    link: '',
  },

]);

var former_students = A([
  {
    firstname: 'Kerolos',
    lastname: 'Lotfy',
    type: 'MS',
    description: 'Kerolos worked on the SecuWear Project. He analyzed the Bluetooth Low Energy protocol and commercial wearable communications for vulnerabilities.',
    img: 'img/kerolos.jpg',
    link: '',
  },

]);

export default Route.extend({
  model(){
    return {"current": curr_students.sortBy('lastname'), "former": former_students.sortBy('lastname')};
  }
});
