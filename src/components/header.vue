<template>
    <header>
        <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
            <div class="container-fluid">
                <span class="navbar-brand ms-3 mb-0 h1 fw-bold"> အိပ်မက် အဘိဓာန်</span>
                <ul class="navbar-nav me-5">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" exact>ပင်မ စာမျက်နှာ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/alphabets" class="nav-link" exact>အက္ခရာစဥ်</router-link>
                    </li>
                </ul>
            </div>
            </nav>
    </header>
</template>

<script>

</script>

<style scoped>
.router-link-active {
    color: blue;
}
</style>
