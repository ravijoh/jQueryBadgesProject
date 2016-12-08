$(function() {
    $.ajax({
       url: 'https://www.codeschool.com/users/2139220.json',
        dataType: 'jsonp',
        success: function(response){
            console.log(response.courses.completed);
            var courses = [];
            var coursesResult = response.courses.completed;
            var totalCourses = response.courses.completed.length;
            for(var i = 0; i < totalCourses; i++){
                var course = $([
                    '<div class="course">',
                    '<h3>' + coursesResult[i].title +'</h3>',
                    '<img src=' + coursesResult[i].badge + ' />',
                    '<a href=' + coursesResult[i].url + ' class="btn btn-primary" target="_blank">See Course</a>',
                    '</div>'
                ].join(''));
                courses.push(course);
            }
            $('#badges').append(courses);
        }
    });
});
