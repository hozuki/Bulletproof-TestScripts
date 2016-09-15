/**
 * Created by MIC on 2016/9/15.
 */

(function () {
    var testScripts = [
        {"name": "Blank", "desc": "Blank", file: ""},
        {"name": "3D-Ball", "desc": "3D ball", "file": "3d-ball.as"},
        {"name": "GreenDam", "desc": "Green Dam Musume", "file": "kanpai-green-dam.as"},
        {"name": "Madoka", "desc": "Madoka and her happy <del>tree</del> friends", "file": "kanpai-madoka.as"}
    ];

    return testScripts;
})();

if (module && typeof module === "object") {
    module.exports = testScripts;
}
