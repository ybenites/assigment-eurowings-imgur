<template>
    <nav class="navbar" role="navigation">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <a href="#" class="brand-logo">Gallery</a>
          </div>
          <div class="col-3 offset-4 icon-account">
            <i class="material-icons">account_circle</i>
          </div>
        </div>

      </div>
    </nav>
</template>
<style lang="scss" scoped>
.navbar{
  color: #fff;
  width: 100%;
  height: 56px;
  line-height: 56px;
  background-color: $secondary-color;
  @media (min-width: $breakpoint-small) {
    height: 64px;
    line-height: 64px;
  }
}
.brand-logo{
  color: #fff;
  display: inline-block;
  font-size: 2.1rem;
  padding: 0;
  &:focus,&:hover{
    outline: none;
    text-decoration: none;
  }
}
.icon-account{
  text-align: right;
  i{
    font-size: 3em;
    vertical-align: middle;
  }
}
</style>