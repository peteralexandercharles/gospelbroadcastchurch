"use strict";
(("undefined" != typeof self ? self : global).webpackChunkclient_web = ("undefined" != typeof self ? self : global).webpackChunkclient_web || []).push([
    [50], {
        92872: (e, i, t) => {
            t.r(i), t.d(i, {
                NowPlayingBarContainer: () => w,
                default: () => y
            });
            var s = t(67154),
                n = t.n(s),
                r = t(59713),
                o = t.n(r),
                a = t(67294),
                l = t.n(a),
                c = t(65858),
                h = t(19577),
                p = t(42103),
                d = t(29953),
                u = t(18097),
                k = t(84827),
                g = t(81148),
                b = t(58804),
                f = t(69037),
                P = t(73012),
                v = t(59819),
                C = t(59094),
                B = t(28998),
                m = t(30966);
            class w extends l().Component {
                static getDerivedStateFromProps(e) {
                    var {
                        trackWindow: i,
                        modal: t
                    } = e;
                    return i && "now_playing_bar" === t ? {
                        isMounted: !0,
                        isVisible: !0
                    } : i && "now_playing_bar" !== t ? {
                        isVisible: !1
                    } : null
                }
                constructor(e) {
                    super(e), o()(this, "state", {
                        isMounted: !1,
                        isVisible: !1
                    }), o()(this, "handleProgress", (e => {
                        var {
                            trackDuration: i
                        } = this.props, t = i > 0 ? e / i : 0;
                        this.progressBarListenerFn && this.progressBarListenerFn({
                            fillPercentage: 100 * t,
                            playPosition: e
                        })
                    })), o()(this, "handlePrevClick", (() => {
                        this.props.dispatch((0, p.SQ)())
                    })), o()(this, "handleNextClick", (() => {
                        this.props.dispatch((0, p.IV)())
                    })), o()(this, "handlePlaybackClick", (() => {
                        this.props.dispatch((0, p.Xh)(g.wl.LABEL.NOW_PLAYING_BAR))
                    })), o()(this, "handleLikeClick", (() => {
                        var {
                            isLiked: e,
                            dispatch: i,
                            trackWindow: t
                        } = this.props, s = (0, k.hb)(t);
                        s && (i((0, d.Dw)(s)), this.props.onLogInteraction({
                            type: g.wl.CATEGORY.CLICK,
                            intent: e ? g.wl.ACTIONS.REMOVE_FROM_LIBRARY : g.wl.ACTIONS.ADD_TO_LIBRARY
                        }))
                    })), o()(this, "handleNPBClick", (() => {
                        var {
                            dispatch: e
                        } = this.props;
                        e((0, u.rf)()), this.props.onLogInteraction({
                            type: "click",
                            intent: "open-now-playing-view"
                        })
                    })), o()(this, "handleChevronUpClick", (() => {
                        this.props.dispatch((0, u.rf)())
                    })), o()(this, "handleAnimateEnd", (() => {
                        this.state.isVisible || this.setState({
                            isMounted: !1
                        })
                    })), o()(this, "onProgressBarPercentageSubscription", (e => {
                        this.progressBarListenerFn = e;
                        var {
                            trackDuration: i,
                            playPosition: t
                        } = this.props;
                        this.publishProgressBarListenerUpdate({
                            fillPercentage: t / i * 100,
                            playPosition: t
                        })
                    })), o()(this, "onProgressBarPercentageUnsubscription", (() => {
                        this.progressBarListenerFn = null
                    })), o()(this, "publishProgressBarListenerUpdate", (e => {
                        this.progressBarListenerFn && this.progressBarListenerFn(e)
                    })), this.rootRef = l().createRef()
                }
                componentDidMount() {
                    this.setState({
                        progressSubscriptionToken: f.O.subscribe("position", this.handleProgress)
                    })
                }
                shouldComponentUpdate(e) {
                    var i;
                    return Boolean(null == e || null === (i = e.trackWindow) || void 0 === i ? void 0 : i.current_track)
                }
                componentWillUnmount() {
                    this.state.progressSubscriptionToken && f.O.unsubscribe(this.state.progressSubscriptionToken)
                }
                render() {
                    var {
                        trackWindow: e,
                        isBuffering: i,
                        isLiked: t
                    } = this.props, s = b.ZP.div.withConfig({
                        displayName: "NowPlayingBar__LeftViewContainer",
                        componentId: "sc-1rfejer-0"
                    })([""]), r = (0, b.ZP)(h.rg).withConfig({
                        displayName: "NowPlayingBar__StyledHeartFilledIcon",
                        componentId: "sc-1rfejer-1"
                    })(["color:", ";"], P.By7), o = l().createElement(s, {
                        onClick: this.handleChevronUpClick
                    }, l().createElement(h.g8, null)), a = l().createElement(s, {
                        onClick: this.handleLikeClick
                    }, t ? l().createElement(r, null) : l().createElement(h.h_, null)), c = (0, k.n6)(e), p = (0, k.tp)(e), d = (0, k.zk)(e);
                    return this.state.isMounted && l().createElement(l().Fragment, null, l().createElement(C.Q, {
                        childRef: this.rootRef
                    }), l().createElement(B.X, {
                        childRef: this.rootRef
                    }), l().createElement(m.i, {
                        childRef: this.rootRef
                    }), l().createElement(h.UW, n()({}, this.props, {
                        rootRef: this.rootRef,
                        isBuffering: i,
                        subscribeProgress: this.onProgressBarPercentageSubscription,
                        unsubscribeProgress: this.onProgressBarPercentageUnsubscription,
                        handlePlaybackClick: this.handlePlaybackClick,
                        handlePrevClick: this.handlePrevClick,
                        handleNextClick: this.handleNextClick,
                        leftNPBView: (0, k.j_)(e) ? a : o,
                        handleNPBClick: this.handleNPBClick,
                        handleAnimateEnd: this.handleAnimateEnd,
                        artist: c,
                        track: p,
                        trackDuration: d,
                        isVisible: this.state.isVisible
                    })))
                }
            }
            w.defaultProps = {
                isLiked: !1,
                isBuffering: !1,
                modal: ""
            };
            const y = (0, v.U)((0, c.$j)((e => {
                var i, t, s, n, r, o, a;
                if (!e.playback.current) return {};
                var {
                    position: l,
                    paused: c,
                    disallows: h
                } = e.playback.current, {
                    device: p
                } = e.connect, d = null == e || null === (i = e.playback) || void 0 === i || null === (t = i.current) || void 0 === t ? void 0 : t.track_window, u = parseInt((0, k.zk)(d), 10), g = parseInt(null == e || null === (s = e.playback) || void 0 === s || null === (n = s.current) || void 0 === n ? void 0 : n.position, 10), b = e.playback.isBuffering, f = (0, k.hb)(d), P = null == e || null === (r = e.session) || void 0 === r ? void 0 : r.isAnonymous, v = Boolean(null == e || null === (o = e.entities) || void 0 === o || null === (a = o.likes) || void 0 === a ? void 0 : a[f]), {
                    modal: C
                } = e.ui;
                return {
                    position: l,
                    paused: c,
                    disallows: h,
                    trackWindow: d,
                    device: p,
                    isBuffering: b,
                    isLiked: v,
                    modal: C,
                    trackDuration: u,
                    playPosition: g,
                    isAnonymous: P
                }
            }))(w))
        }
    }
]);
//# sourceMappingURL=mwp-now-playing-bar-container.e4eaeb45.js.map