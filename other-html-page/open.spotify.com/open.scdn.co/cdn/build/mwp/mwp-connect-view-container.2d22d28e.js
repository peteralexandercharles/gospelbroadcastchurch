"use strict";
(("undefined" != typeof self ? self : global).webpackChunkclient_web = ("undefined" != typeof self ? self : global).webpackChunkclient_web || []).push([
    [224], {
        12216: (e, n, t) => {
            t.r(n), t.d(n, {
                ConnectView: () => f,
                default: () => k
            });
            var c = t(67154),
                o = t.n(c),
                i = t(6479),
                s = t.n(i),
                l = t(59713),
                a = t.n(l),
                r = (t(33948), t(2707), t(19577)),
                d = t(67294),
                h = t.n(d),
                p = t(65858),
                u = t(37334),
                C = t(18097),
                m = t(20657),
                v = ["currentVolume", "devices", "modal"];
            class w extends d.Component {
                constructor() {
                    super(...arguments), a()(this, "handleDeviceRowClick", (e => () => this.props.dispatch((0, u.C$)(e)))), a()(this, "handleCloseClick", (() => {
                        this.props.dispatch((0, C.rf)())
                    })), a()(this, "handlePositionChange", (e => {
                        this.props.dispatch((0, u.jA)(e))
                    })), a()(this, "decorateDeviceList", (e => e.filter((e => !e.is_restricted && e.name)).sort(((e, n) => e.local ? -1 : n.local ? 1 : e.name.toLowerCase().localeCompare(n.name.toLowerCase()))).map((e => (e.name = e.local ? m.ag.get("connect-picker.this-web-browser") : e.name, e)))))
                }
                render() {
                    var e = this.props,
                        {
                            currentVolume: n,
                            devices: t,
                            modal: c
                        } = e,
                        i = s()(e, v);
                    return "connect" === c ? h().createElement(r.tH, o()({
                        onDeviceRowClick: this.handleDeviceRowClick,
                        handleCloseClick: this.handleCloseClick,
                        handleDragStop: this.handlePositionChange,
                        handlePositionClick: this.handlePositionChange,
                        header: m.ag.get("mwp.header.connect"),
                        currentVolume: n,
                        devices: this.decorateDeviceList(t)
                    }, i)) : null
                }
            }
            w.defaultProps = {
                devices: [],
                volume: 0
            };
            const f = (0, p.$j)((e => {
                    var n = e.connect && e.connect.device && e.connect.device.volume,
                        {
                            modal: t
                        } = e.ui;
                    return {
                        currentVolume: n >= 0 ? n : 0,
                        devices: e.connect && e.connect.devices,
                        modal: t
                    }
                }))(w),
                k = f
        }
    }
]);
//# sourceMappingURL=mwp-connect-view-container.2d22d28e.js.map