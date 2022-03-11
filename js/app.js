// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]

const app = new Vue({
  el: '#root',
  data: {
    currentIndex: 0,
    array: [
      {
        titolo: 'Svezia',
        img: 'img/01.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        titolo: 'Svizzera',
        img: 'img/02.jpg',
        text: 'Lorem ipsum',
      },
      {
        titolo: 'Gran Bretagna',
        img: 'img/03.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        titolo: 'Germania',
        img: 'img/04.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        titolo: 'Paradise',
        img: 'img/04.jpg',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
      },
    ],
  },
  methods: {
    previousIndex() {
      if (this.currentIndex == 0) {
        this.currentIndex = this.array.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextIndex() {
      if (this.currentIndex == this.array.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
  },
});
