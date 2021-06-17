<template>
    <div class="comment-form-wrap">
        <form>
            <div class="comment-form-content">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Name" required="">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <input class="form-control" type="email" placeholder="youremail@domain.com" required="">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Subject (optional)">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <textarea class="form-control" name="comment" id="comment" cols="45" rows="5" placeholder="Enter message here"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group mb-0">
                            <button class="btn-submit" type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {

    };
</script>