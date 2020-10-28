var amountOfUsers = 0;

/**********FOR FIREFOX*******/
var changeIcon = 0;
if (!navigator.userAgent.toLowerCase().includes("chrome")) {
  document.getElementById("change_when_close").attributes[3].nodeValue =
    "hideMe";
  document.getElementById("fireFoxButton").attributes[2].nodeValue = "showMe";
  document.querySelector("html").attributes[0].nodeValue =
    "scrollbarFireFox fontawesome-i2svg-active fontawesome-i2svg-complete";
} else {
  document.getElementById("change_when_close").attributes[3].nodeValue =
    "showMe";
  document.getElementById("fireFoxButton").attributes[2].nodeValue = "hideMe";
}
document.getElementById("fireFoxButton").addEventListener("click", changeIt);

function changeIt() {
  if (changeIcon === 0) {
    document.getElementById("fireFoxButton").firstElementChild.innerHTML =
      "<i class='fas fa-chevron-circle-right'></i>";
    changeIcon = 1;
  } else {
    document.getElementById("fireFoxButton").firstElementChild.innerHTML =
      "<i class='fas fa-bars'></i>";
    changeIcon = 0;
  }
}

/***************CODE FUNCTIONS************* */
(function () {
  for (
    var tags = ["main", "figure", "figcaption"], i = 0; i < tags.length; i++
  ) {
    document.createElement(tags[i]);
  }
})();

(function () {
  if (typeof window.getComputedStyle == "undefined") {
    return;
  }

  var pre = document.getElementsByTagName("pre");

  for (var len = pre.length, i = 0; i < len; i++) {
    var code = pre[i].getElementsByTagName("code").item(0);
    if (!code) {
      code = pre[i].getElementsByTagName("samp").item(0);
      if (!code) {
        continue;
      }
    }

    var column = document.createElement("div");
    column.setAttribute("aria-hidden", "true");

    for (var n = 0; n < code.innerHTML.split(/[\n\r]/g).length; n++) {
      column.appendChild(document.createElement("span"));
    }

    pre[i].insertBefore(column, code);
    pre[i].className = "line-numbers";
  }
})();

/**************SIDENAVBAR FUNCTIONS*********** */

var count = 0;

function openOrCloseNav(flag) {
  if (flag) {
    //the button pressed or not
    count++;
    openOrCloseSideBar(count % 2);
    moveSideBarButton(count % 2);
  } else {
    if (count % 2) {
      changeIt();
      document.getElementById("rx_icon").click();
      openOrCloseSideBar(0);
      moveMain(0);
      moveSideBarButton(0);
    }
  }
  if ($(window).width() > 768) {
    moveMain(count % 2);
  }
}

function openOrCloseNavBySwap(flag) {
  if (!(count % 2)) {
    document.getElementById("rx_icon").click();
    changeIt();
    openOrCloseSideBar(flag);
    moveSideBarButton(flag);
  }
  if (!flag) {
    document.getElementById("rx_icon").click();
    changeIt();
    openOrCloseSideBar(0);
    moveSideBarButton(0);
  }
}

function openOrCloseSideBar(flag) {
  //1 open 0 close
  document.getElementById("mySidenav").style.width = flag ? "250px" : "0";
  document.getElementById("topPage").style.marginRight = flag ? "250px" : "0";
}

function moveMain(flag) {
  //1 open 0 close
  document.getElementById("main").style.marginRight = flag ? "250px" : "0";
}

function moveSideBarButton(flag) {
  //1 open 0 close
  document.getElementById("topPageIcon").style.marginRight = flag ?
    "250px" :
    "-5px";
}

var imgs;
var swipeOptions = {
  triggerOnTouchEnd: true,
  swipeStatus: swipeStatus,
  allowPageScroll: "vertical",
  threshold: 75,
};

$(function () {
  if (document.getElementById("the_main_id").style.width <= 1024) {
    imgs = $("#topPage");
    imgs.swipe(swipeOptions);
  }
});

function swipeStatus(event, phase, direction, distance) {
  if (phase == "move" && (direction == "left" || direction == "right")) {
    var duration = 0;
    if (direction == "left") {
      openOrCloseNavBySwap(1);
    } else if (direction == "right") {
      openOrCloseNavBySwap(0);
    }
  }
}

/****************SIDEBAR ICON*************/

function DrawerIcon(icon) {
  "use strict";
  var ic,
    line1,
    line2,
    line3,
    const1 = 1 / 300,
    const2 = 1 / 500,
    const3 = 2 / 3,
    direction = true,
    locked = false,
    rotateLine,
    scaleX,
    transY,
    transX,
    scaleX2,
    transX2,
    rotateIc,
    transformProp = "transform",
    transitionProp = "transition",
    trZ = "translateZ(0)",
    propPrefixCss = "";

  function setProperty(elem, property, value) {
    elem.style[property] = value;
  }

  function enableAnimation(duration) {
    var transition = propPrefixCss + "transform " + duration + "s ease";
    setProperty(line1, transitionProp, transition);
    setProperty(line2, transitionProp, transition);
    setProperty(line3, transitionProp, transition);
    setProperty(ic, transitionProp, transition);
  }

  function disableAnimation() {
    setProperty(line1, transitionProp, "none");
    setProperty(line2, transitionProp, "none");
    setProperty(line3, transitionProp, "none");
    setProperty(ic, transitionProp, "none");
  }

  this.state = function () {
    return direction;
  };

  this.setOnClick = function (listener) {
    icon.onclick = listener;
  };

  this.set = function (percent) {
    if (locked) {
      return;
    }
    if (percent > 100) {
      percent = 100;
    }
    if (percent < 0) {
      percent = 0;
    }
    if (percent >= 100) {
      direction = false;
    }
    if (percent <= 0) {
      direction = true;
    }

    rotateLine = 0.45 * percent;
    scaleX = 1 - const1 * percent;
    transY = 0.054 * percent;
    transX = 0.033 * percent;
    scaleX2 = 1 - const2 * percent;
    transX2 = -0.01 * percent;
    if (direction) {
      rotateIc = 1.8 * percent;
    } else {
      rotateIc = 360 - 1.8 * percent;
    }
    setProperty(
      line1,
      transformProp,
      "rotate(" +
      rotateLine +
      "deg) scaleX(" +
      scaleX +
      ") translateY(" +
      transY +
      "px) translateX(" +
      transX +
      "px)" +
      trZ
    );
    setProperty(
      line2,
      transformProp,
      "scaleX(" + scaleX2 + ") translateX(" + transX2 + "px)" + trZ
    );
    setProperty(
      line3,
      transformProp,
      "rotate(" +
      -rotateLine +
      "deg) scaleX(" +
      scaleX +
      ") translateY(" +
      -transY +
      "px) translateX(" +
      transX +
      "px)" +
      trZ
    );
    setProperty(ic, transformProp, "rotate(" + rotateIc + "deg)" + trZ);
  };

  this.setState = function (state, duration) {
    duration = duration || 0.225;
    enableAnimation(duration);
    var temp = this;
    switch (state) {
      case 0:
        this.set(1);
        break;
      case 1:
        this.set(100);
        break;
    }
    setTimeout(function () {
      disableAnimation();
      if (state === 0) {
        temp.set(0);
      }
    }, Number(duration) * 1000);
  };

  this.lock = function () {
    locked = true;
  };
  this.unLock = function () {
    locked = false;
  };

  (function () {
    icon.innerHTML +=
      '<span class="ic"><i class="line one"></i><i class="line two"></i><i class="line thr"></i></span>';
    ic = icon.querySelector(".ic");
    line1 = ic.querySelector(".one");
    line2 = ic.querySelector(".two");
    line3 = ic.querySelector(".thr");
    //Find prop name
    var testEl = document.createElement("div"),
      vendors;
    if (testEl.style.transform === undefined) {
      vendors = ["Webkit", "Moz", "ms", "O"];
      for (var vendor in vendors) {
        if (testEl.style[vendors[vendor] + "Transform"] !== undefined) {
          transformProp = vendors[vendor] + "Transform";
          propPrefixCss = "-" + vendors[vendor].toLowerCase() + "-";
        }
        if (testEl.style[vendors[vendor] + "Transition"] !== undefined) {
          transitionProp = vendors[vendor] + "Transition";
        }
      }
    }
    if (/.*opera.*presto/i.test(navigator.userAgent)) {
      trZ = "";
    }
  })();
}

var drawerIcon;
window.addEventListener("load", function (e) {
  drawerIcon = new DrawerIcon(document.getElementById("rx_icon"));
  drawerIcon.setOnClick(function () {
    if (drawerIcon.state()) drawerIcon.setState(1);
    else drawerIcon.setState(0);
  });
});

/*************count Of Users *********/
var countOfUsers2 = [];
async function displayAmountOfUsers(countOfUsers) {
  var i;
  for (i = 1; i < 26; i++) {
    await fetch("https://api.countapi.xyz/get/Cprogram/index" + i + "/").then((res) => res.json()).then((res) => {
      countOfUsers.push(JSON.parse(res.value));
    });
  }
  console.log(countOfUsers);
}

function showUser() {
  var countOfUsers1 = [];
  displayAmountOfUsers(countOfUsers1);
}

/**********************LINK TO FILES****************/

function iconToggleSwitch(x) {
  x.classList.toggle("fa-envelope-open");
}