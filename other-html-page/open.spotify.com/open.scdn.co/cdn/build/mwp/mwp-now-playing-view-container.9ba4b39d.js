"use strict";
(("undefined" != typeof self ? self : global).webpackChunkclient_web = ("undefined" != typeof self ? self : global).webpackChunkclient_web || []).push([
    [812], {
        992: (e, n, t) => {
            t.r(n), t.d(n, {
                NowPlayingViewContainer: () => ke,
                default: () => ge
            });
            var i = t(59713),
                r = t.n(i),
                a = (t(33948), t(67294)),
                l = t.n(a),
                o = t(65858),
                s = t(58804),
                c = t(73012),
                d = t(19577),
                {
                    glueEaseInHard: p
                } = d.pB,
                u = s.ZP.div.withConfig({
                    displayName: "NowPlayingView__Container",
                    componentId: "sc-1r74c0b-0"
                })(["display:flex;height:100%;width:100%;flex-direction:column;padding:", ";background-color:", ";background-image:linear-gradient( ", ",", " 85% );transform:translateY(20%);opacity:0;animation:0.2s ", ";animation-delay:", "s;animation-fill-mode:forwards;animation-name:", ";@keyframes transIn{from{transform:translateY(20%);opacity:0;}to{transform:translateY(0%);opacity:1;}}@keyframes transOut{from{transform:translateY(0%);opacity:1;}to{transform:translateY(20%);opacity:0;}}"], c.g4V, c.Snx, (e => e.dominantColor), c.Snx, p, (e => e.isVisible ? .2 : 0), (e => e.isVisible ? "transIn" : "transOut")),
                m = s.ZP.div.withConfig({
                    displayName: "NowPlayingView__MetadataContainer",
                    componentId: "sc-1r74c0b-1"
                })(["display:flex;flex-grow:1;min-height:0;margin-bottom:", ";"], c.o78),
                h = s.ZP.div.withConfig({
                    displayName: "NowPlayingView__PlaybackControlsContainer",
                    componentId: "sc-1r74c0b-2"
                })(["margin:", " 0;"], c.o78),
                k = s.ZP.div.withConfig({
                    displayName: "NowPlayingView__FooterControlsContainer",
                    componentId: "sc-1r74c0b-3"
                })(["display:flex;min-height:25px;"]),
                g = (0, s.ZP)(d.ju).withConfig({
                    displayName: "NowPlayingView__StyledChevronDownButton",
                    componentId: "sc-1r74c0b-4"
                })(["position:absolute;padding:8px 0 0;"]);
            class v extends l().PureComponent {
                constructor(e) {
                    super(e), this.rootRef = l().createRef()
                }
                componentDidMount() {
                    this.rootRef.current.addEventListener("animationend", this.props.handleAnimateEnd)
                }
                componentWillUnmount() {
                    this.rootRef.current.removeEventListener("animationend", this.props.handleAnimateEnd)
                }
                render() {
                    var {
                        metadata: e,
                        playbackControls: n,
                        footerControls: t,
                        handleMinimizeClick: i,
                        dominantColor: r,
                        isVisible: a
                    } = this.props;
                    return l().createElement(u, {
                        dominantColor: r,
                        isVisible: a,
                        ref: this.rootRef
                    }, i && l().createElement(g, {
                        size: 24,
                        "aria-label": "exit screen",
                        onClick: i
                    }), l().createElement(m, {
                        onClick: i
                    }, e), l().createElement(h, null, n), l().createElement(k, null, t))
                }
            }
            v.defaultProps = {
                handleMinimizeClick: null,
                handleAnimateEnd: () => {},
                dominantColor: c.Snx,
                footerControls: null,
                isVisible: !0
            };
            var f = t(18097),
                C = t(84827),
                y = t(6479),
                b = t.n(y),
                w = ["Component", "artist", "track", "aligned"],
                {
                    isTBRTL: x
                } = d.HV,
                E = (0, s.ZP)(d.R_).withConfig({
                    displayName: "ArtistTrackHeader__TrackHeaderMarquee",
                    componentId: "sc-50fggq-0"
                })(["position:relative;margin:0 0 8px;width:100%;height:36px;*{white-space:nowrap;}"]),
                P = s.ZP.h1.withConfig({
                    displayName: "ArtistTrackHeader__TrackHeaderText",
                    componentId: "sc-50fggq-1"
                })(["margin:0;"]),
                _ = e => {
                    var {
                        Component: n,
                        artist: t,
                        track: i,
                        aligned: r
                    } = e, a = b()(e, w);
                    return l().createElement(n, a, l().createElement(E, {
                        key: i,
                        contentSpacing: 36,
                        aligned: r
                    }, l().createElement(P, null, l().createElement(d.WT, null, i))), l().createElement(d.cT, {
                        component: "h2"
                    }, t))
                };
            _.defaultProps = {
                artist: "",
                Component: "div",
                track: "",
                aligned: !1
            };
            var N = (0, s.ZP)(_).withConfig({
                    displayName: "ArtistTrackHeader",
                    componentId: "sc-50fggq-2"
                })(["h2{color:", ";margin:0;overflow:hidden;text-align:", ";text-overflow:ellipsis;white-space:nowrap;}"], c.nh1, (e => {
                    var {
                        aligned: n,
                        theme: t
                    } = e;
                    return n ? x(t) ? "right" : "left" : "center"
                })),
                A = t(91362),
                I = t(71594),
                T = s.ZP.div.withConfig({
                    displayName: "CoverArt__FallbackIcon",
                    componentId: "sc-x56t3d-0"
                })(["margin:auto;"]),
                L = s.ZP.div.withConfig({
                    displayName: "CoverArt__CoverArtImage",
                    componentId: "sc-x56t3d-1"
                })(["height:100%;width:100%;background:url(", ");background-repeat:no-repeat;background-size:contain;background-position:center;filter:drop-shadow(0px 0px 1px rgba(", ",0.3)) drop-shadow(0px 0px 10px rgba(", ",0.3));"], (e => e.src), (0, I.a)(c.Snx).join(","), (0, I.a)(c.Snx).join(","));

            function B(e) {
                var {
                    src: n,
                    onClick: t
                } = e;
                return l().createElement(l().Fragment, null, n ? l().createElement(L, {
                    src: n,
                    onClick: t,
                    alt: "Cover Art",
                    role: "img"
                }) : l().createElement(T, null, l().createElement(A.u, {
                    iconSize: 64
                })))
            }
            var S = s.ZP.div.withConfig({
                    displayName: "Metadata__Container",
                    componentId: "sc-1q7dxjb-0"
                })(["display:flex;flex-direction:column;justify-content:space-between;min-height:100%;width:100%;"]),
                M = s.ZP.div.withConfig({
                    displayName: "Metadata__Header",
                    componentId: "sc-1q7dxjb-1"
                })(["align-items:center;display:flex;justify-content:flex-start;flex-direction:column;flex:initial;"]),
                j = s.ZP.div.withConfig({
                    displayName: "Metadata__MetadataBody",
                    componentId: "sc-1q7dxjb-2"
                })(["display:flex;flex-direction:column;justify-content:flex-start;min-height:0;flex:1;@media only screen and (orientation:landscape){flex-direction:row;align-items:center;justify-content:flex-start;}"]),
                F = (0, s.ZP)(d.YR).withConfig({
                    displayName: "Metadata__CurrentlyPlayingTitle",
                    componentId: "sc-1q7dxjb-3"
                })(["text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:70%;"]),
                V = s.ZP.div.withConfig({
                    displayName: "Metadata__CoverArtContainer",
                    componentId: "sc-1q7dxjb-4"
                })(["height:100%;width:100%;display:flex;align-items:center;margin:", " 0;@media only screen and (orientation:landscape){max-width:20%;flex-grow:1;margin:", ";}"], c.g4V, c.g4V),
                U = s.ZP.div.withConfig({
                    displayName: "Metadata__AdInfoWrapper",
                    componentId: "sc-1q7dxjb-5"
                })(["align-items:center;display:flex;flex-direction:column;margin-bottom:4px;@media only screen and (orientation:landscape){align-items:flex-start;}"]),
                Z = (0, s.ZP)(d.cT).withConfig({
                    displayName: "Metadata__AdTitle",
                    componentId: "sc-1q7dxjb-6"
                })(["color:", ";display:-webkit-box;text-align:center;margin-top:12px;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;"], c.nh1),
                D = e => {
                    var {
                        contextTitle: n,
                        imageUrl: t,
                        title: i,
                        subtitle: r,
                        isAdvertisement: a,
                        handleAdLearnMoreClick: o,
                        learnMoreText: s
                    } = e;
                    return l().createElement(S, null, l().createElement(M, null, n && l().createElement(F, {
                        component: "h3"
                    }, n)), l().createElement(j, null, l().createElement(V, null, l().createElement(B, {
                        src: t,
                        onClick: a ? o : void 0
                    })), a && o ? l().createElement(U, null, l().createElement(d.zx, {
                        onClick: o,
                        version: "secondary"
                    }, s), l().createElement(Z, null, r)) : l().createElement(N, {
                        artist: i,
                        track: r,
                        aligned: !0
                    })))
                };
            D.defaultProps = {
                contextTitle: null,
                isAdvertisement: !1,
                handleAdLearnMoreClick: null,
                learnMoreText: "Learn More"
            };
            var R = t(20657),
                O = t(22603);

            function z() {
                var e, n, t, i, r, s, c = (0, o.v9)((e => {
                        var n, t;
                        return null === (n = e.playback) || void 0 === n || null === (t = n.current) || void 0 === t ? void 0 : t.track_window
                    })),
                    d = (0, o.v9)((e => {
                        var n, t;
                        return null === (n = e.playback) || void 0 === n || null === (t = n.current) || void 0 === t ? void 0 : t.context
                    })),
                    p = (0, C.vI)(c),
                    u = (0, C.A_)(c),
                    m = (0, C.rC)(c),
                    h = (0, C.n6)(c),
                    k = (0, C.tp)(c),
                    g = (0, C.pl)(c),
                    v = (null == c || null === (e = c.current_track) || void 0 === e || null === (n = e.album) || void 0 === n ? void 0 : n.name) || "",
                    f = null == c || null === (t = c.current_track) || void 0 === t ? void 0 : t.uri,
                    y = null == c || null === (i = c.current_track) || void 0 === i || null === (r = i.artists) || void 0 === r || null === (s = r[0]) || void 0 === s ? void 0 : s.uri,
                    b = (0, a.useCallback)((() => {
                        window.open(m, "_blank", "noopener")
                    }), [m]),
                    w = (0, a.useCallback)((() => {
                        var e, n = !u && (null == d || null === (e = d.metadata) || void 0 === e ? void 0 : e.context_description) || v,
                            t = R.ag.get("mwp.playback.badge.advertisement"),
                            i = t.charAt(0) + t.slice(1).toLowerCase();
                        return p ? i : n
                    }), [v, d, p, u])(),
                    x = null != d && d.uri ? l().createElement(O.r, {
                        to: d.uri
                    }, w) : w,
                    E = u ? v : h,
                    P = y ? l().createElement(O.r, {
                        to: y
                    }, E) : E,
                    _ = f ? l().createElement(O.r, {
                        to: f
                    }, k) : k;
                return l().createElement(D, {
                    contextTitle: x,
                    title: P,
                    subtitle: _,
                    imageUrl: g,
                    isAdvertisement: p,
                    handleAdLearnMoreClick: m && p ? b : void 0,
                    learnMoreText: R.ag.get("connect-picker.learn-more")
                })
            }
            var {
                isTBRTL: H,
                addRTLFlexDirection: q
            } = d.HV, Y = s.ZP.div.withConfig({
                displayName: "PlaybackControls__ColumnContainer",
                componentId: "sc-1839yso-0"
            })(["display:flex;justify-content:center;align-items:center;", ";"], q), W = s.ZP.div.withConfig({
                displayName: "PlaybackControls__Column",
                componentId: "sc-1839yso-1"
            })(["flex-basis:20%;display:flex;justify-content:center;&:first-child{justify-content:", ";}&:last-child{justify-content:", ";}"], (e => {
                var {
                    theme: n
                } = e;
                return H(n) ? "flex-end" : "flex-start"
            }), (e => {
                var {
                    theme: n
                } = e;
                return H(n) ? "flex-start" : "flex-end"
            })), $ = e => {
                var {
                    progressBar: n,
                    col1: t,
                    col2: i,
                    col3: r,
                    col4: a,
                    col5: o
                } = e;
                return l().createElement(l().Fragment, null, n, l().createElement(Y, null, l().createElement(W, null, t), l().createElement(W, null, i), l().createElement(W, null, r), l().createElement(W, null, a), l().createElement(W, null, o)))
            };
            $.defaultProps = {
                col1: null,
                col2: null,
                col3: null,
                col4: null,
                col5: null
            };
            var G = t(69518),
                X = t.n(G),
                J = t(69037),
                K = t(42103),
                Q = t(29953),
                ee = t(81148),
                ne = t(77173),
                te = t(59819),
                ie = (0, s.ZP)(d.rg).withConfig({
                    displayName: "PlaybackControlsContainer__StyledHeartFilledIcon",
                    componentId: "sc-8qk0zg-0"
                })(["color:", ";"], c.By7),
                re = (0, s.ZP)(d.h3).withConfig({
                    displayName: "PlaybackControlsContainer__SeekButton",
                    componentId: "sc-8qk0zg-1"
                })(["padding:12px;"]);
            class ae extends a.Component {
                constructor() {
                    super(...arguments), r()(this, "handleProgress", (e => {
                        var {
                            trackDuration: n
                        } = this.props, t = n > 0 ? e / n : 0;
                        this.progressBarListenerFn && this.progressBarListenerFn({
                            fillPercentage: 100 * t,
                            playPosition: e
                        })
                    })), r()(this, "handleLikeClick", (() => {
                        var {
                            handleLike: e,
                            uri: n,
                            isLiked: t
                        } = this.props;
                        e(n, t)
                    })), r()(this, "onProgressBarPercentageSubscription", (e => {
                        this.progressBarListenerFn = e;
                        var {
                            trackDuration: n,
                            playPosition: t
                        } = this.props;
                        this.publishProgressBarListenerUpdate({
                            fillPercentage: t / n * 100,
                            playPosition: t
                        })
                    })), r()(this, "onProgressBarPercentageUnsubscription", (() => {
                        this.progressBarListenerFn = null
                    })), r()(this, "onSeek", (e => {
                        var {
                            trackDuration: n,
                            handleSeek: t
                        } = this.props;
                        t(n * e), this.publishProgressBarListenerUpdate({
                            fillPercentage: 100 * e,
                            playPosition: n * e
                        })
                    })), r()(this, "publishProgressBarListenerUpdate", (e => {
                        this.progressBarListenerFn && this.progressBarListenerFn(e)
                    })), r()(this, "isCurrentTrackEpisode", (() => this.props.entityType === X().Type.EPISODE)), r()(this, "canFavoriteCurrentTrack", (() => !this.props.isAdvertisement && !this.isCurrentTrackEpisode())), r()(this, "renderProgressBar", (() => {
                        var {
                            seekingEnabled: e,
                            trackDuration: n
                        } = this.props;
                        return l().createElement(d.ko, {
                            trackDuration: n,
                            handleDragStop: e ? this.onSeek : null,
                            handlePositionClick: e ? this.onSeek : null,
                            subscribeProgress: this.onProgressBarPercentageSubscription,
                            unsubscribeProgress: this.onProgressBarPercentageUnsubscription
                        })
                    })), r()(this, "renderColumn1", (() => {
                        var {
                            isLiked: e
                        } = this.props;
                        return this.canFavoriteCurrentTrack() ? l().createElement(d.h3, {
                            onClick: this.handleLikeClick
                        }, e ? l().createElement(ie, null) : l().createElement(d.h_, null)) : null
                    })), r()(this, "renderColumn2", (() => {
                        var {
                            skipPrevEnabled: e,
                            createHandleSeekBackward: n,
                            handlePrevClick: t
                        } = this.props;
                        return this.isCurrentTrackEpisode() ? l().createElement(re, {
                            "aria-label": R.ag.get("playback-control.skip-backward-15"),
                            onClick: n(15e3)
                        }, l().createElement(d.Fy, null)) : l().createElement(d.Bt, {
                            isEnabled: e,
                            "aria-label": R.ag.get("playback-control.skip-back"),
                            onClick: t
                        })
                    })), r()(this, "renderColumn4", (() => {
                        var {
                            skipNextEnabled: e,
                            createHandleSeekForward: n,
                            handleNextClick: t
                        } = this.props;
                        return this.isCurrentTrackEpisode() ? l().createElement(re, {
                            "aria-label": R.ag.get("playback-control.skip-forward-15"),
                            onClick: n(15e3)
                        }, l().createElement(d.bJ, null)) : l().createElement(d.nB, {
                            isEnabled: e,
                            "aria-label": R.ag.get("playback-control.skip-forward"),
                            onClick: t
                        })
                    })), r()(this, "renderColumn5", (() => {
                        var {
                            shuffle: e,
                            handleShuffleClick: n,
                            onDemandProduct: t
                        } = this.props;
                        return t && !this.isCurrentTrackEpisode() ? l().createElement(d.P4, {
                            isActive: e,
                            onClick: n
                        }) : null
                    }))
                }
                componentDidMount() {
                    var e = J.O.subscribe("position", this.handleProgress);
                    this.setState({
                        progressSubscriptionToken: e
                    })
                }
                componentWillUnmount() {
                    this.state.progressSubscriptionToken && J.O.unsubscribe(this.state.progressSubscriptionToken)
                }
                render() {
                    var {
                        paused: e,
                        isBuffering: n,
                        handlePlaybackClick: t
                    } = this.props;
                    return l().createElement($, {
                        progressBar: this.renderProgressBar(),
                        col1: this.renderColumn1(),
                        col2: this.renderColumn2(),
                        col3: l().createElement(d.PF, {
                            onClick: t,
                            isBuffering: n,
                            isPlaying: !e
                        }),
                        col4: this.renderColumn4(),
                        col5: this.renderColumn5()
                    })
                }
            }
            const le = (0, te.U)((0, o.$j)((e => {
                var n, t, i, r, a, l, o, s, c, d, p, u, m, h, k, g, v = (null === (n = e.playback) || void 0 === n || null === (t = n.current) || void 0 === t ? void 0 : t.track_window) || {},
                    f = (0, C.vI)(v),
                    y = parseInt((0, C.zk)(v), 10),
                    b = parseInt(null === (i = e.playback) || void 0 === i || null === (r = i.current) || void 0 === r ? void 0 : r.position, 10),
                    w = (0, C.hb)(v),
                    x = (null === (a = e.entities) || void 0 === a ? void 0 : a.likes) || {},
                    E = Boolean(x[w]),
                    P = null === (l = e.playback) || void 0 === l ? void 0 : l.isBuffering,
                    _ = null === (o = e.playback) || void 0 === o || null === (s = o.current) || void 0 === s ? void 0 : s.paused,
                    N = null === (c = e.playback) || void 0 === c || null === (d = c.current) || void 0 === d ? void 0 : d.shuffle,
                    A = (null === (p = e.playback) || void 0 === p || null === (u = p.current) || void 0 === u ? void 0 : u.disallows) || {},
                    I = !A.seeking,
                    T = ((null === (m = e.playback) || void 0 === m || null === (h = m.current) || void 0 === h || null === (k = h.restrictions) || void 0 === k ? void 0 : k.disallow_skipping_next_reasons) || []).includes("mft_disallow");
                return {
                    isBuffering: P,
                    paused: _,
                    shuffle: N,
                    seekingEnabled: I,
                    skipNextEnabled: !A.skipping_next || T,
                    skipPrevEnabled: !A.skipping_prev,
                    uri: w,
                    isLiked: E,
                    isAdvertisement: f,
                    trackDuration: y,
                    entityType: null === (g = X().from(w)) || void 0 === g ? void 0 : g.type,
                    playPosition: b,
                    onDemandProduct: (0, ne.a)(e.session)
                }
            }), ((e, n) => {
                var {
                    onLogInteraction: t
                } = n;
                return {
                    handlePlaybackClick: () => {
                        e((0, K.Xh)(ee.wl.LABEL.NOW_PLAYING_BAR))
                    },
                    handlePrevClick: () => {
                        e((0, K.SQ)())
                    },
                    handleNextClick: () => {
                        e((0, K.IV)())
                    },
                    handleLike: (n, i) => {
                        e((0, Q.Dw)(n)), t({
                            type: ee.wl.CATEGORY.CLICK,
                            intent: i ? ee.wl.ACTIONS.REMOVE_FROM_LIBRARY : ee.wl.ACTIONS.ADD_TO_LIBRARY,
                            itemIdSuffix: ee.wl.LABEL.CONTEXTMENU
                        })
                    },
                    handleShuffleClick: () => {
                        e((0, K.Yj)())
                    },
                    handleSeek: n => {
                        t({
                            type: "click",
                            intent: "seek"
                        }), e((0, K.O7)(n))
                    },
                    createHandleSeekForward: n => () => {
                        t({
                            type: "click",
                            intent: "seek-forward-15"
                        }), e((0, K.ez)(n))
                    },
                    createHandleSeekBackward: n => () => {
                        t({
                            type: "click",
                            intent: "seek-back-15"
                        }), e((0, K.NA)(n))
                    }
                }
            }))(ae));
            var {
                addRTLFlexDirection: oe
            } = d.HV, se = s.ZP.div.withConfig({
                displayName: "FooterControls__Container",
                componentId: "sc-1f8f4a9-0"
            })(["display:flex;justify-content:space-between;align-items:center;", ";width:100%;"], oe), ce = s.ZP.div.withConfig({
                displayName: "FooterControls__Column",
                componentId: "sc-1f8f4a9-1"
            })(["display:flex;justify-content:center;"]), de = e => {
                var {
                    col1: n,
                    col2: t
                } = e;
                return l().createElement(se, null, l().createElement(ce, null, n), l().createElement(ce, null, t))
            };
            de.defaultProps = {
                col1: null,
                col2: null
            };
            var pe = t(4013);
            class ue extends a.Component {
                render() {
                    var {
                        deviceActive: e,
                        deviceLocal: n,
                        deviceName: t,
                        onConnectClick: i,
                        displayConnectButton: r
                    } = this.props, {
                        shareUrl: a,
                        shareTrackName: o,
                        shareArtistName: s
                    } = this.props;
                    return l().createElement(de, {
                        col1: r && l().createElement(d.NL, {
                            isActive: e,
                            "aria-label": "Connected",
                            type: "button",
                            isLocal: n,
                            device: t,
                            onClick: i,
                            size: 24
                        }),
                        col2: l().createElement(pe.F, {
                            "aria-label": R.ag.get("mwp.list.item.share"),
                            onClick: () => this.props.onShare({
                                shareTrackName: o,
                                shareArtistName: s,
                                shareUrl: a
                            }),
                            iconSize: 24
                        })
                    })
                }
            }
            const me = (0, o.$j)((e => {
                var n, t, i, r, a = (null === (n = e.connect) || void 0 === n ? void 0 : n.device) || {},
                    {
                        is_active: l,
                        local: o,
                        name: s
                    } = a,
                    c = null === (t = e.playback) || void 0 === t || null === (i = t.current) || void 0 === i ? void 0 : i.track_window,
                    d = (0, C.hb)(c);
                return {
                    deviceActive: l,
                    deviceLocal: o,
                    deviceName: s,
                    shareUrl: Boolean(d) && X().from(d).toOpenURL() || "",
                    shareTrackName: (0, C.tp)(c),
                    shareArtistName: (0, C.n6)(c),
                    currentTrack: (null == c ? void 0 : c.current_track) || null,
                    displayConnectButton: !(null !== (r = e.session) && void 0 !== r && r.isAnonymous)
                }
            }), (e => ({
                onConnectClick: () => {
                    e((0, f.n$)())
                },
                onShare: n => {
                    var {
                        shareUrl: t,
                        shareTrackName: i,
                        shareArtistName: r
                    } = n;
                    e((0, Q.OW)(i, r, t))
                }
            })))(ue);
            var he = t(92007);
            class ke extends l().Component {
                constructor() {
                    super(...arguments), r()(this, "state", {
                        isMounted: !1,
                        isVisible: !1
                    }), r()(this, "onAnimateEnd", (() => {
                        this.state.isVisible || this.setState({
                            isMounted: !1
                        })
                    }))
                }
                static getDerivedStateFromProps(e) {
                    var {
                        trackWindow: n,
                        modal: t
                    } = e;
                    return n && "now_playing_view" === t ? {
                        isMounted: !0,
                        isVisible: !0
                    } : {
                        isVisible: !1,
                        isMounted: !1
                    }
                }
                componentDidUpdate(e) {
                    var {
                        imgUrl: n,
                        handleImgUpdate: t
                    } = this.props;
                    e.imgUrl !== n && n && t(n)
                }
                render() {
                    var {
                        dominantColor: e,
                        handleMinimizeClick: n,
                        isAdvertisement: t
                    } = this.props;
                    return this.state.isMounted && l().createElement(v, {
                        isVisible: this.state.isVisible,
                        handleMinimizeClick: t ? null : n,
                        handleAnimateEnd: this.onAnimateEnd,
                        metadata: l().createElement(z, null),
                        playbackControls: l().createElement(le, null),
                        footerControls: l().createElement(me, null),
                        dominantColor: e
                    })
                }
            }
            ke.defaultProps = {
                modal: ""
            };
            const ge = (0, te.U)((0, o.$j)((e => {
                var n, t, i;
                if (null === (n = e.playback) || void 0 === n || !n.current) return {};
                var {
                    modal: r
                } = e.ui, a = null === (t = e.playback) || void 0 === t || null === (i = t.current) || void 0 === i ? void 0 : i.track_window, l = (0, C.pl)(a), o = l && e.colorExtraction.colors[l];
                return {
                    trackWindow: a,
                    modal: r,
                    imgUrl: l,
                    dominantColor: o ? "rgba(".concat(o.join(","), ",0.6)") : "",
                    isAdvertisement: (0, C.vI)(a)
                }
            }), ((e, n) => ({
                handleMinimizeClick: () => {
                    e((0, f.iv)()), n.onLogInteraction({
                        type: "click",
                        intent: "close-now-playing-view"
                    })
                },
                handleImgUpdate: n => {
                    e((0, he.Fd)({
                        url: n
                    }))
                }
            })))(ke))
        }
    }
]);
//# sourceMappingURL=mwp-now-playing-view-container.9ba4b39d.js.map