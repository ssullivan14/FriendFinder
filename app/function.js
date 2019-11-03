$(document).ready(function () {
            $("#submitBtn").on("click", function (){
                function validateForm(){
                    var isValid = true;
                    $('.validate').each(function() {
                        if($(this).val() === ''){
                            isValid = false;
                        }
                    })
                }
            })
        }
                    