<script>
$(document).ready(function(){
    $('#purpose').on('change', function() {
      if ( this.value == '0')
      {
           $("#Buy").hide();
        $("#Rental").show();
      }
       if ( this.value == '1')
      {
          $("#Rental").hide();
        $("#Buy").show();
      }
      
    });
});
</script>