"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-size";
exports.ids = ["vendor-chunks/tsparticles-updater-size"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-size/esm/SizeUpdater.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles-updater-size/esm/SizeUpdater.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SizeUpdater: () => (/* binding */ SizeUpdater)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-size/esm/Utils.js\");\n\n\nclass SizeUpdater {\n    init(particle) {\n        const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;\n        if (sizeAnimation.enable) {\n            particle.size.velocity = (particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;\n            if (!sizeAnimation.sync) {\n                particle.size.velocity *= (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)();\n            }\n        }\n    }\n    isEnabled(particle) {\n        return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? 0) <= 0 || (particle.size.maxLoops ?? 0) > 0 && (particle.size.loops ?? 0) < (particle.size.maxLoops ?? 0));\n    }\n    reset(particle) {\n        particle.size.loops = 0;\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.updateSize)(particle, delta);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zaXplL2VzbS9TaXplVXBkYXRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFDVjtBQUM5QixNQUFNRTtJQUNUQyxLQUFLQyxRQUFRLEVBQUU7UUFDWCxNQUFNQyxZQUFZRCxTQUFTQyxTQUFTLEVBQUVDLGNBQWNGLFNBQVNHLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFQyxnQkFBZ0JILFlBQVlJLFNBQVM7UUFDaEgsSUFBSUQsY0FBY0UsTUFBTSxFQUFFO1lBQ3RCUCxTQUFTSSxJQUFJLENBQUNJLFFBQVEsR0FDbEIsQ0FBRVIsU0FBU1MsTUFBTSxDQUFDQyxrQkFBa0IsSUFBSVQsVUFBVVEsTUFBTSxDQUFDQyxrQkFBa0IsSUFBSSxNQUMzRVQsVUFBVVEsTUFBTSxDQUFDRSxZQUFZO1lBQ3JDLElBQUksQ0FBQ04sY0FBY08sSUFBSSxFQUFFO2dCQUNyQlosU0FBU0ksSUFBSSxDQUFDSSxRQUFRLElBQUlaLDZEQUFTQTtZQUN2QztRQUNKO0lBQ0o7SUFDQWlCLFVBQVViLFFBQVEsRUFBRTtRQUNoQixPQUFRLENBQUNBLFNBQVNjLFNBQVMsSUFDdkIsQ0FBQ2QsU0FBU2UsUUFBUSxJQUNsQmYsU0FBU0ksSUFBSSxDQUFDRyxNQUFNLElBQ25CLEVBQUNQLFNBQVNJLElBQUksQ0FBQ1ksUUFBUSxJQUFJLE1BQU0sS0FDN0IsQ0FBQ2hCLFNBQVNJLElBQUksQ0FBQ1ksUUFBUSxJQUFJLEtBQUssS0FBSyxDQUFDaEIsU0FBU0ksSUFBSSxDQUFDYSxLQUFLLElBQUksS0FBTWpCLENBQUFBLFNBQVNJLElBQUksQ0FBQ1ksUUFBUSxJQUFJLEVBQUU7SUFDNUc7SUFDQUUsTUFBTWxCLFFBQVEsRUFBRTtRQUNaQSxTQUFTSSxJQUFJLENBQUNhLEtBQUssR0FBRztJQUMxQjtJQUNBRSxPQUFPbkIsUUFBUSxFQUFFb0IsS0FBSyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUNQLFNBQVMsQ0FBQ2IsV0FBVztZQUMzQjtRQUNKO1FBQ0FILGtEQUFVQSxDQUFDRyxVQUFVb0I7SUFDekI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFyLWJ5Ly4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItc2l6ZS9lc20vU2l6ZVVwZGF0ZXIuanM/OWI3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRSYW5kb20gfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5pbXBvcnQgeyB1cGRhdGVTaXplIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmV4cG9ydCBjbGFzcyBTaXplVXBkYXRlciB7XG4gICAgaW5pdChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBwYXJ0aWNsZS5jb250YWluZXIsIHNpemVPcHRpb25zID0gcGFydGljbGUub3B0aW9ucy5zaXplLCBzaXplQW5pbWF0aW9uID0gc2l6ZU9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICBpZiAoc2l6ZUFuaW1hdGlvbi5lbmFibGUpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnNpemUudmVsb2NpdHkgPVxuICAgICAgICAgICAgICAgICgocGFydGljbGUucmV0aW5hLnNpemVBbmltYXRpb25TcGVlZCA/PyBjb250YWluZXIucmV0aW5hLnNpemVBbmltYXRpb25TcGVlZCkgLyAxMDApICpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJldGluYS5yZWR1Y2VGYWN0b3I7XG4gICAgICAgICAgICBpZiAoIXNpemVBbmltYXRpb24uc3luYykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnNpemUudmVsb2NpdHkgKj0gZ2V0UmFuZG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNFbmFibGVkKHBhcnRpY2xlKSB7XG4gICAgICAgIHJldHVybiAoIXBhcnRpY2xlLmRlc3Ryb3llZCAmJlxuICAgICAgICAgICAgIXBhcnRpY2xlLnNwYXduaW5nICYmXG4gICAgICAgICAgICBwYXJ0aWNsZS5zaXplLmVuYWJsZSAmJlxuICAgICAgICAgICAgKChwYXJ0aWNsZS5zaXplLm1heExvb3BzID8/IDApIDw9IDAgfHxcbiAgICAgICAgICAgICAgICAoKHBhcnRpY2xlLnNpemUubWF4TG9vcHMgPz8gMCkgPiAwICYmIChwYXJ0aWNsZS5zaXplLmxvb3BzID8/IDApIDwgKHBhcnRpY2xlLnNpemUubWF4TG9vcHMgPz8gMCkpKSk7XG4gICAgfVxuICAgIHJlc2V0KHBhcnRpY2xlKSB7XG4gICAgICAgIHBhcnRpY2xlLnNpemUubG9vcHMgPSAwO1xuICAgIH1cbiAgICB1cGRhdGUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZWQocGFydGljbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlU2l6ZShwYXJ0aWNsZSwgZGVsdGEpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRSYW5kb20iLCJ1cGRhdGVTaXplIiwiU2l6ZVVwZGF0ZXIiLCJpbml0IiwicGFydGljbGUiLCJjb250YWluZXIiLCJzaXplT3B0aW9ucyIsIm9wdGlvbnMiLCJzaXplIiwic2l6ZUFuaW1hdGlvbiIsImFuaW1hdGlvbiIsImVuYWJsZSIsInZlbG9jaXR5IiwicmV0aW5hIiwic2l6ZUFuaW1hdGlvblNwZWVkIiwicmVkdWNlRmFjdG9yIiwic3luYyIsImlzRW5hYmxlZCIsImRlc3Ryb3llZCIsInNwYXduaW5nIiwibWF4TG9vcHMiLCJsb29wcyIsInJlc2V0IiwidXBkYXRlIiwiZGVsdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-size/esm/SizeUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-size/esm/Utils.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-updater-size/esm/Utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateSize: () => (/* binding */ updateSize)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nfunction checkDestroy(particle, value, minValue, maxValue) {\n    switch(particle.options.size.animation.destroy){\n        case \"max\":\n            if (value >= maxValue) {\n                particle.destroy();\n            }\n            break;\n        case \"min\":\n            if (value <= minValue) {\n                particle.destroy();\n            }\n            break;\n    }\n}\nfunction updateSize(particle, delta) {\n    const data = particle.size;\n    if (particle.destroyed || !data || !data.enable || (data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0)) {\n        return;\n    }\n    const sizeVelocity = (data.velocity ?? 0) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;\n    if (!data.time) {\n        data.time = 0;\n    }\n    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {\n        data.time += delta.value;\n    }\n    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {\n        return;\n    }\n    switch(data.status){\n        case \"increasing\":\n            if (data.value >= maxValue) {\n                data.status = \"decreasing\";\n                if (!data.loops) {\n                    data.loops = 0;\n                }\n                data.loops++;\n            } else {\n                data.value += sizeVelocity;\n            }\n            break;\n        case \"decreasing\":\n            if (data.value <= minValue) {\n                data.status = \"increasing\";\n                if (!data.loops) {\n                    data.loops = 0;\n                }\n                data.loops++;\n            } else {\n                data.value -= sizeVelocity;\n            }\n    }\n    if (data.velocity && decay !== 1) {\n        data.velocity *= decay;\n    }\n    checkDestroy(particle, data.value, minValue, maxValue);\n    if (!particle.destroyed) {\n        data.value = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.clamp)(data.value, minValue, maxValue);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zaXplL2VzbS9VdGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUMzQyxTQUFTQyxhQUFhQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxRQUFRO0lBQ3JELE9BQVFILFNBQVNJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLE9BQU87UUFDM0MsS0FBSztZQUNELElBQUlOLFNBQVNFLFVBQVU7Z0JBQ25CSCxTQUFTTyxPQUFPO1lBQ3BCO1lBQ0E7UUFDSixLQUFLO1lBQ0QsSUFBSU4sU0FBU0MsVUFBVTtnQkFDbkJGLFNBQVNPLE9BQU87WUFDcEI7WUFDQTtJQUNSO0FBQ0o7QUFDTyxTQUFTQyxXQUFXUixRQUFRLEVBQUVTLEtBQUs7SUFDdEMsTUFBTUMsT0FBT1YsU0FBU0ssSUFBSTtJQUMxQixJQUFJTCxTQUFTVyxTQUFTLElBQ2xCLENBQUNELFFBQ0QsQ0FBQ0EsS0FBS0UsTUFBTSxJQUNYLENBQUNGLEtBQUtHLFFBQVEsSUFBSSxLQUFLLEtBQUssQ0FBQ0gsS0FBS0ksS0FBSyxJQUFJLEtBQU1KLENBQUFBLEtBQUtHLFFBQVEsSUFBSSxJQUFLO1FBQ3hFO0lBQ0o7SUFDQSxNQUFNRSxlQUFlLENBQUNMLEtBQUtNLFFBQVEsSUFBSSxLQUFLUCxNQUFNUSxNQUFNLEVBQUVmLFdBQVdRLEtBQUtRLEdBQUcsRUFBRWYsV0FBV08sS0FBS1MsR0FBRyxFQUFFQyxRQUFRVixLQUFLVSxLQUFLLElBQUk7SUFDMUgsSUFBSSxDQUFDVixLQUFLVyxJQUFJLEVBQUU7UUFDWlgsS0FBS1csSUFBSSxHQUFHO0lBQ2hCO0lBQ0EsSUFBSSxDQUFDWCxLQUFLWSxTQUFTLElBQUksS0FBSyxLQUFLWixLQUFLVyxJQUFJLEdBQUlYLENBQUFBLEtBQUtZLFNBQVMsSUFBSSxJQUFJO1FBQ2hFWixLQUFLVyxJQUFJLElBQUlaLE1BQU1SLEtBQUs7SUFDNUI7SUFDQSxJQUFJLENBQUNTLEtBQUtZLFNBQVMsSUFBSSxLQUFLLEtBQUtaLEtBQUtXLElBQUksR0FBSVgsQ0FBQUEsS0FBS1ksU0FBUyxJQUFJLElBQUk7UUFDaEU7SUFDSjtJQUNBLE9BQVFaLEtBQUthLE1BQU07UUFDZixLQUFLO1lBQ0QsSUFBSWIsS0FBS1QsS0FBSyxJQUFJRSxVQUFVO2dCQUN4Qk8sS0FBS2EsTUFBTSxHQUFHO2dCQUNkLElBQUksQ0FBQ2IsS0FBS0ksS0FBSyxFQUFFO29CQUNiSixLQUFLSSxLQUFLLEdBQUc7Z0JBQ2pCO2dCQUNBSixLQUFLSSxLQUFLO1lBQ2QsT0FDSztnQkFDREosS0FBS1QsS0FBSyxJQUFJYztZQUNsQjtZQUNBO1FBQ0osS0FBSztZQUNELElBQUlMLEtBQUtULEtBQUssSUFBSUMsVUFBVTtnQkFDeEJRLEtBQUthLE1BQU0sR0FBRztnQkFDZCxJQUFJLENBQUNiLEtBQUtJLEtBQUssRUFBRTtvQkFDYkosS0FBS0ksS0FBSyxHQUFHO2dCQUNqQjtnQkFDQUosS0FBS0ksS0FBSztZQUNkLE9BQ0s7Z0JBQ0RKLEtBQUtULEtBQUssSUFBSWM7WUFDbEI7SUFDUjtJQUNBLElBQUlMLEtBQUtNLFFBQVEsSUFBSUksVUFBVSxHQUFHO1FBQzlCVixLQUFLTSxRQUFRLElBQUlJO0lBQ3JCO0lBQ0FyQixhQUFhQyxVQUFVVSxLQUFLVCxLQUFLLEVBQUVDLFVBQVVDO0lBQzdDLElBQUksQ0FBQ0gsU0FBU1csU0FBUyxFQUFFO1FBQ3JCRCxLQUFLVCxLQUFLLEdBQUdILHlEQUFLQSxDQUFDWSxLQUFLVCxLQUFLLEVBQUVDLFVBQVVDO0lBQzdDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhci1ieS8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXNpemUvZXNtL1V0aWxzLmpzPzE5MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5mdW5jdGlvbiBjaGVja0Rlc3Ryb3kocGFydGljbGUsIHZhbHVlLCBtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcbiAgICBzd2l0Y2ggKHBhcnRpY2xlLm9wdGlvbnMuc2l6ZS5hbmltYXRpb24uZGVzdHJveSkge1xuICAgICAgICBjYXNlIFwibWF4XCI6XG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gbWF4VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1pblwiOlxuICAgICAgICAgICAgaWYgKHZhbHVlIDw9IG1pblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGFydGljbGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNpemUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgY29uc3QgZGF0YSA9IHBhcnRpY2xlLnNpemU7XG4gICAgaWYgKHBhcnRpY2xlLmRlc3Ryb3llZCB8fFxuICAgICAgICAhZGF0YSB8fFxuICAgICAgICAhZGF0YS5lbmFibGUgfHxcbiAgICAgICAgKChkYXRhLm1heExvb3BzID8/IDApID4gMCAmJiAoZGF0YS5sb29wcyA/PyAwKSA+IChkYXRhLm1heExvb3BzID8/IDApKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNpemVWZWxvY2l0eSA9IChkYXRhLnZlbG9jaXR5ID8/IDApICogZGVsdGEuZmFjdG9yLCBtaW5WYWx1ZSA9IGRhdGEubWluLCBtYXhWYWx1ZSA9IGRhdGEubWF4LCBkZWNheSA9IGRhdGEuZGVjYXkgPz8gMTtcbiAgICBpZiAoIWRhdGEudGltZSkge1xuICAgICAgICBkYXRhLnRpbWUgPSAwO1xuICAgIH1cbiAgICBpZiAoKGRhdGEuZGVsYXlUaW1lID8/IDApID4gMCAmJiBkYXRhLnRpbWUgPCAoZGF0YS5kZWxheVRpbWUgPz8gMCkpIHtcbiAgICAgICAgZGF0YS50aW1lICs9IGRlbHRhLnZhbHVlO1xuICAgIH1cbiAgICBpZiAoKGRhdGEuZGVsYXlUaW1lID8/IDApID4gMCAmJiBkYXRhLnRpbWUgPCAoZGF0YS5kZWxheVRpbWUgPz8gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgXCJpbmNyZWFzaW5nXCI6XG4gICAgICAgICAgICBpZiAoZGF0YS52YWx1ZSA+PSBtYXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEuc3RhdHVzID0gXCJkZWNyZWFzaW5nXCI7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmxvb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubG9vcHMgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLmxvb3BzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhLnZhbHVlICs9IHNpemVWZWxvY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVjcmVhc2luZ1wiOlxuICAgICAgICAgICAgaWYgKGRhdGEudmFsdWUgPD0gbWluVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXR1cyA9IFwiaW5jcmVhc2luZ1wiO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5sb29wcykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxvb3BzID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YS5sb29wcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSAtPSBzaXplVmVsb2NpdHk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkYXRhLnZlbG9jaXR5ICYmIGRlY2F5ICE9PSAxKSB7XG4gICAgICAgIGRhdGEudmVsb2NpdHkgKj0gZGVjYXk7XG4gICAgfVxuICAgIGNoZWNrRGVzdHJveShwYXJ0aWNsZSwgZGF0YS52YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICBpZiAoIXBhcnRpY2xlLmRlc3Ryb3llZCkge1xuICAgICAgICBkYXRhLnZhbHVlID0gY2xhbXAoZGF0YS52YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiY2xhbXAiLCJjaGVja0Rlc3Ryb3kiLCJwYXJ0aWNsZSIsInZhbHVlIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIm9wdGlvbnMiLCJzaXplIiwiYW5pbWF0aW9uIiwiZGVzdHJveSIsInVwZGF0ZVNpemUiLCJkZWx0YSIsImRhdGEiLCJkZXN0cm95ZWQiLCJlbmFibGUiLCJtYXhMb29wcyIsImxvb3BzIiwic2l6ZVZlbG9jaXR5IiwidmVsb2NpdHkiLCJmYWN0b3IiLCJtaW4iLCJtYXgiLCJkZWNheSIsInRpbWUiLCJkZWxheVRpbWUiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-size/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-size/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-updater-size/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSizeUpdater: () => (/* binding */ loadSizeUpdater)\n/* harmony export */ });\n/* harmony import */ var _SizeUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SizeUpdater */ \"(ssr)/./node_modules/tsparticles-updater-size/esm/SizeUpdater.js\");\n\nasync function loadSizeUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"size\", ()=>new _SizeUpdater__WEBPACK_IMPORTED_MODULE_0__.SizeUpdater(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1zaXplL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUNyQyxlQUFlQyxnQkFBZ0JDLE1BQU0sRUFBRUMsVUFBVSxJQUFJO0lBQ3hELE1BQU1ELE9BQU9FLGtCQUFrQixDQUFDLFFBQVEsSUFBTSxJQUFJSixxREFBV0EsSUFBSUc7QUFDckUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhci1ieS8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXNpemUvZXNtL2luZGV4LmpzPzk4MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l6ZVVwZGF0ZXIgfSBmcm9tIFwiLi9TaXplVXBkYXRlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRTaXplVXBkYXRlcihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFBhcnRpY2xlVXBkYXRlcihcInNpemVcIiwgKCkgPT4gbmV3IFNpemVVcGRhdGVyKCksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbIlNpemVVcGRhdGVyIiwibG9hZFNpemVVcGRhdGVyIiwiZW5naW5lIiwicmVmcmVzaCIsImFkZFBhcnRpY2xlVXBkYXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-size/esm/index.js\n");

/***/ })

};
;