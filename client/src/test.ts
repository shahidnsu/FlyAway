import 'jest-preset-angular/setup-jest';

<<<<<<< HEAD
Object.defineProperty(window, 'CSS', {value: null});
=======
Object.defineProperty(window, 'CSS', { value: null });
>>>>>>> b4ed4300b0003f593616bdf5bbefb82e4fdb6b29
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
<<<<<<< HEAD
      appearance: ['-webkit-appearance']
    };
  }
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
=======
      appearance: ['-webkit-appearance'],
    };
  },
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
>>>>>>> b4ed4300b0003f593616bdf5bbefb82e4fdb6b29
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
<<<<<<< HEAD
      configurable: true
    };
  }
});
=======
      configurable: true,
    };
  },
});
>>>>>>> b4ed4300b0003f593616bdf5bbefb82e4fdb6b29
