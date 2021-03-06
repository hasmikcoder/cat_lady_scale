// Main JS File for Cat Lady Scale

$(document).ready(function(){



    /*
     * Behavior Class
     * constructor - needs the description and pointValue to construct
     * listItem function - returns the behavior as an html string
     */
    function Behavior (description, pointValue) {
        this.description = description;
        this.pointValue = pointValue;
    }
    Behavior.prototype = {
        getListItem: function () {
            return '<div class="behavior-item">' +
                '<div class="description">' + this.description + '</div>' +
                '<div class="points">' + this.pointValue + '</div>' +
                '</div>';
        },
    }

    /*
     * Status Class
     * constructor - needs the title for the status and a corresponding image
     * imagePath function - returns local path to the image (for using in the src attr)
     */
    function Status (title, image) {
        this.title = title;
        this.image = image;
    }
    Status.prototype = {
        imagePath: function (){
            return 'images/' + this.image;
        }
    }

    /*
     * Cat Lady Behaviors
     * list of all possible behaviors to fill the drop down form
     */
    var catLadyBehaviors = [
        new Behavior("agrees that there's a cat gif for everything", 3),
        new Behavior("own one dog", -2),
        new Behavior("own one cat", 2),
        new Behavior("own more than one cat", 5),
        new Behavior("own more than one dog", -5),
        new Behavior("takes selfies with cats", 4),
        new Behavior("never had a cat", -3),
        new Behavior("allergic to cats", -4)
        // -----------------------------------------------------------------------------------------
        // TODO: CHALLENGE 1 Done!
        // add some more behaviors cat lady behaviors here to customize your app!
        // -----------------------------------------------------------------------------------------
    ];

    /*
     * Cat Lady Scale
     * description: the cat lady scale is indexed by the number on the scale. Each
     * scale number has an object with a title and image name associated with it.
     */
    var CAT_LADY_SCALE = {
        10: new Status("Cat-sylum", 'cat_lady.jpg' ),
        9: new Status("ALL OF THE CATS", 'all_kittens.jpg' ),
        8: new Status("Takin Selfies With Cats", 'cat_selfie.jpg' ),
        7: new Status("A One-Cat Kind of Human", 'one_cat.jpg' ),
        6: new Status("Cat Gifs Are...Alright", 'grumpy.jpg' ),
        5: new Status("Indifferent", 'cat_dog_friends.jpg' ),
        4: new Status("Ehh, Dogs Greater...", 'cat_backseat.jpg' ),
        3: new Status("Dogs are where it's at", 'dogs.jpg' ),
        2: new Status("I wish I were allergic", 'allergic.jpg' ),
        1: new Status("Cats...like, the musical?", 'cats.jpg' ),
        0: new Status("What's a cat? Never heard of 'em", 'dog_heaven.jpg' ),
    };

    /*
     * Cat Lady Object
     * behaviors - array of behavior objects
     * addBehavior - function that adds behavior and updates cat lady object as necessary
     * status - the current cat lady status object
     * updateStatus - function that updates the cat lady objects status
     */
    var catLady = {
        behaviors: [ ],
        addBehavior: function (newBehavior) {
          this.behaviors.push(newBehavior);
          this.updateStatus();
        },

            //--------------------------------------------------------------------------------------
            // TODO: CHALLENGE 2  Done!
            // Implement the add behavior function. This function should:
            // 1. add the behavior object to the behaviors list in *this* catLady object (<- that
            //    is a hint)...
            // 2. now that a new behavior is added... update *this* cat lady's status (hint you
            //    should just call a function in this object)
            //--------------------------------------------------------------------------------------
        status: CAT_LADY_SCALE[5], // just the inital status... INDIFFERENT
        updateStatus: function () {
            //--------------------------------------------------------------------------------------
            // TODO: CHALLENGE 8  Done!
            // Implement the evaluate function to calculate where on the scale this cat lady
            // is. This function should:
            // 1. Loop through this catLady's behaviors array, to calculate the sum of all behavior
            //    point values. ** when adding up the point values, start the sum at 5 (indifferent)
            //    on the scale.


            var pointValueSum = 5;
            for (var i = 0; i < catLady.behaviors.length; i++) {
              pointValueSum += this.behaviors[i].pointValue;
              console.log (pointValueSum);

              console.log (this.behaviors[i].pointValue);
              console.log (this.behaviors);
      }


            //--------------------------------------------------------------------------------------


           // TODO: CHALLENGE 9  DONE!!!
            // Use the pointValue sum to determine where on the scale this cat lady is. Match the
            // sum to a value in the CAT_LADY_SCALE object. Get the Status object, located at the
            // corresponding scale position. And then update this catLady status property.
            //--------------------------------------------------------------------------------------
          if (pointValueSum >=10){
          catLady.status = CAT_LADY_SCALE[10];
          console.log(catLady.status);
          }
          else if (pointValueSum <10 && pointValueSum >0){
            catLady.status = CAT_LADY_SCALE[pointValueSum];
            console.log (catLady.status);
          }
          else {
            console.log(catLady.status);
            catLady.status = CAT_LADY_SCALE[0];
          }
    },
 };
    /*
     * Add Behavior Click Event
     * handles when the user adds a behavior
     */
     //---------------------------------------------------------------------------------------------
     // TODO:
     // Implement the add-behavior event listener. This event listener should use js AND
     // jQuery to update the Cat Lady Scale page upon a user adding a behavior to their cat lady.
     // (see individual challenges below)
     //---------------------------------------------------------------------------------------------
    $('#add-behavior').click(function(e){
        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 4  Done!
        // 1. Prevent the default page reload using jquery.
        e.preventDefault();

        //------------------------------------------------------------------------------------------

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 5  Done!
        // 2. Grab the catLadyBehavior index value from the behavior option in the behavior-select
        //    field located in the html. This will be tricky... before you start try selecting
        //    different options in dropdown and observe what happens to the html.


        var optionValue = $("#behavior-select option:selected").attr("value");

        //------------------------------------------------------------------------------------------


        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 6  Done!
        // 3. Use the option value from step 5, to get the correct cat lady behavior from the
        //    catLadyBehaviors array.
        // 4. Now add the behavior to the catLady object.

        var behavior = catLadyBehaviors[optionValue]; // this will return a behavior
        catLady.addBehavior(behavior);
        //------------------------------------------------------------------------------------------

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 7  Done!
        // 5. Display the newly added behavior with the displayNewBehavior function.
        displayNewBehavior (behavior);
        //------------------------------------------------------------------------------------------

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 10 DONE!!!
        // 1. Display the cat lady status, with the displayStatus function;
        //------------------------------------------------------------------------------------------
      displayStatus (catLady.status);
    });

    /*
     * Display New Behavior
     * add the passed in behavior to the display in the behavior list in the html
     */
    function displayNewBehavior (behavior)
    {
        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 3  Done!
        // Here you should use jquery to to add the correct behavior item div to the behavior-list
        // element (see html file). To do this:
        // 1. get the list item from the behavior object (see the behavior prototype)
        // 2. append the list item to the behavior list element in the html
        //------------------------------------------------------------------------------------------

      $('.behavior-list').append(behavior.getListItem());
    }

    /*
     * Update Status Display
     * updates the cat lady status display in the html with the cat status object it was passed
     */
    function displayStatus (catLadyStatus)
    {
        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 11   DONE!!!
        // Here you should use jquery to to update the Cat Lady Status Display. To do this:
        // 1. update the status image src in the html
        // 2. update the status title in the html
        // ** make sure to checkout the status object for help!

         //updates image source
         $('.status-image img').attr('src','images/'+ catLadyStatus['image'])

         //updates cat lady status text
         $('.status-title').html(catLadyStatus['title']);
   }

    /*
     * Fill Behavior Drop Down
     * adds all behaviors from the catLadyBehaviors array as options in the html dropdown
     */
    function fillBehaviorDropDown ()
    {
        for (var i = 0; i < catLadyBehaviors.length; i++) {
            var description = catLadyBehaviors[i].description;
            var points = catLadyBehaviors[i].pointValue;
            var option = '<option value="' + i +'">' + description + '</option>';
            $('#new-behavior-form .behaviors').append(option);
        }
    }

    /*
     * Updates the selected options in the add behavior drop down
     * the current selected option, will have a select attribute associated with it.
     */
    $('body').on('change', 'select', function(){
        $('option[selected]').removeAttr('selected');
        $("option[value=" + this.value + "]").attr('selected', true);
    });

    // initial setup
    fillBehaviorDropDown(); // fill drop down
    displayStatus(catLady.status); // display initial cat lady status
});
