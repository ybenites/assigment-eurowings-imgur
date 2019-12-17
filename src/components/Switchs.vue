<template>
    <div class="switch">
    <label>
      Off
      <input type="checkbox"  @click="$emit('checked', !showViral)" :checked="showViral">
      <span class="lever"></span>
      On
    </label>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'showViral',
    event: 'checked',
  },
  props: {
    showViral: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
$switch-checked-lever-bg: #84c7c1;
$switch-bg-color: $primary-color;
$switch-unchecked-lever-bg: rgba(0,0,0,0.38);
$switch-radius: 15px;
$switch-unchecked-bg:#F1F1F1;


.switch,
.switch * {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

.switch label {
  cursor: pointer;
  font-size: .8rem;
  color: #9e9e9e;
  font-family: Roboto;
  font-weight: 100;
}

.switch label input[type=checkbox] {
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .lever {
    background-color: $switch-checked-lever-bg;

    &:before, &:after {
      left: 18px;
    }

    &:after {
      background-color: $switch-bg-color;
    }
  }
}

.switch label .lever {
  content: "";
  display: inline-block;
  position: relative;
  width: 36px;
  height: 14px;
  background-color: $switch-unchecked-lever-bg;
  border-radius: $switch-radius;
  transition: background 0.3s ease;
  vertical-align: middle;
  margin: 0 7px;

  &:before, &:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 0;
    top: -3px;
    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;
  }

  &:before {
    background-color: transparentize($switch-bg-color, .85);
  }

  &:after {
    background-color: $switch-unchecked-bg;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
}

// Switch active style
input[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,
input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before {
  transform: scale(2.4);
  background-color: transparentize($switch-bg-color, .85);
}

input[type=checkbox]:not(:disabled) ~ .lever:active:before,
input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before {
  transform: scale(2.4);
  background-color: rgba(0,0,0,.08);
}
</style>