
// the $ () is a shorthand for the getElementbyID method
// using the .ready function will make this function available as soon as the DOM is loaded, but it will wait for the browswer to load

$(document).ready(function () {

    // shorthand to get element with saveBtn class and .on will give us the shorthand to get 2 event handlers for the selected element
    $('.saveBtn').on('click',function () {

    // $(this) keyword enables jquery functionality 

    // create variable which will find the siblings of saveBtn with class description and create a value 
    var value = $(this).siblings('.description').val();

    // create varaible which will find the parent of saveBtn and find the id attribute  
    var time = $(this).parent().attr('id');

    // this will store our new variables in the local storage object
    localStorage.setItem(time, value);

    // grabs the section element with id notification and adds a class 
    $('.notification').addClass('show');

    // this function will remove the added class after 3 seconds
    setTimeout(function () {
      
      // grabs the section element with id notificiation and removes the class
      $('.notification').removeClass('show');
    },5000);
  });


    // need function to determine if the time is the present, past or future
    function keepTime () {

      // this will create a variable that gets the current day and hour
      var currentTime = dayjs().hour();

      // loop over each element with time block class and run this function
      $('.time-block').each(function () {

      // create a variable that will deconstruct the string and return the first integar 
      // this will check the attribute of elements with class time-block and return the value of the id attribute
      //  next this will split at the dash and store the first number
      var calenderHour = parseInt($(this).attr('id').split('-')[1]);

        if (calenderHour < currentTime) {

           // this refers to the element with class time block and add class past
          $(this).addClass('past');

        } else if (calenderHour === currentTime) {

          // this refers to the element with class time block and removes the class past while adding the class present
          $(this).removeClass('past');
          $(this).addClass('present');

        } else {

          // this refers to the element with class time block and 
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
          }
      });
    }

    // this will run the function 
    keepTime();

    // this will set a delay for our function to tell it when to run again
    setInterval(keepTime,10000);

    // this will select the element that has the id with hour-# and it will select the element with the class description
    // then will put the value that was stored in local storage 
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // this will display the the current day by selecting the paragraph elemetn with the id currentday
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

});


