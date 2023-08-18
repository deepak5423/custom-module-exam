(function ($, Drupal) {
    Drupal.behaviors.customIncrementField = {
      attach: function (context, settings) {
        // Use the context parameter to limit the scope of your jQuery selections.
        $('.increment-field-button', context).each(function () {
          var $button = $(this);
          var nid = $button.data('nid');
          var field = $button.data('field');
          var $fieldValue = $('[data-drupal-selector="' + field + '"]');
  
          // Attach the click event handler to the button.
          $button.on('click', function () {
            // Fetch the current field value.
            var currentValue = parseInt($fieldValue.val());
  
            // Increment the field value.
            var newValue = currentValue + 1;
  
            // Update the field value.
            $fieldValue.val(newValue);
          });
        });
      }
    };
  })(jQuery, Drupal);
  