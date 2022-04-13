"use strict";
(("undefined" != typeof self ? self : global).webpackChunkclient_web = ("undefined" != typeof self ? self : global).webpackChunkclient_web || []).push([
    [737], {
        29368: (e, t, n) => {
            n.r(t), n.d(t, {
                RoutedContextMenu: () => he,
                default: () => ve
            });
            var i = n(67154),
                r = n.n(i),
                a = n(59713),
                c = n.n(a),
                o = n(6479),
                l = n.n(o),
                u = (n(33948), n(67294)),
                s = n.n(u),
                p = n(23828),
                y = n(65858),
                m = n(52883),
                d = n(58804),
                k = n(69518),
                g = n.n(k),
                C = n(73012),
                w = n(87577),
                x = n(20657),
                f = n(40178),
                h = (n(41817), n(19577)),
                v = n(12073),
                T = d.ZP.div.withConfig({
                    displayName: "ContextMenuMetadata__Container",
                    componentId: "sc-9fh3vn-0"
                })(["align-self:center;display:flex;flex-direction:row;"]),
                I = (0, d.ZP)(T).withConfig({
                    displayName: "ContextMenuMetadata__HeaderTitles",
                    componentId: "sc-9fh3vn-1"
                })(["flex:1;flex-direction:column;"]),
                E = (0, d.ZP)(h.YR).withConfig({
                    displayName: "ContextMenuMetadata__HeaderSubtitle",
                    componentId: "sc-9fh3vn-2"
                })(["color:", ";"], C.nh1),
                O = (0, d.ZP)(h.EY).withConfig({
                    displayName: "ContextMenuMetadata__Description",
                    componentId: "sc-9fh3vn-3"
                })(["color:", ";"], C.nh1),
                b = d.ZP.div.withConfig({
                    displayName: "ContextMenuMetadata__HeaderImage",
                    componentId: "sc-9fh3vn-4"
                })(["background-image:url(", ");background-size:cover;background-position:50%;background-repeat:no-repeat;width:64px;height:64px;", ""], (e => {
                    var {
                        backgroundImage: t
                    } = e;
                    return t
                }), (0, v.addRTLMargin)(C.o78)),
                U = d.ZP.div.withConfig({
                    displayName: "ContextMenuMetadata__FallbackIcon",
                    componentId: "sc-9fh3vn-5"
                })(["display:flex;justify-content:center;align-items:center;background-color:", ";width:64px;height:64px;margin-right:", ";"], C.CTm, C.o78);
            const _ = e => {
                var {
                    title: t,
                    subtitle: n,
                    image: i,
                    description: r,
                    type: a
                } = e;
                return s().createElement(T, null, s().createElement(h.CA, {
                    src: i,
                    Icon: b,
                    FallbackIcon: U,
                    type: a
                }), s().createElement(I, null, s().createElement(h.cT, null, t), s().createElement(E, null, n)), r && s().createElement(O, {
                    component: "p"
                }, r))
            };
            var P = (0, d.ZP)(h.h3).withConfig({
                displayName: "ContextMenuActionItem__Container",
                componentId: "sc-d2m8qn-0"
            })(["display:flex;padding:", " 0;width:100%;color:", ";align-items:center;"], C.o78, C.ixZ);
            const L = e => {
                    var {
                        icon: t,
                        title: n,
                        onClick: i,
                        testID: r
                    } = e, a = (0, d.ZP)(t).withConfig({
                        displayName: "ContextMenuActionItem__StyledIcon",
                        componentId: "sc-d2m8qn-1"
                    })(["", ""], (0, v.addRTLMargin)(C.o78));
                    return s().createElement(P, {
                        onClick: i,
                        "data-testid": r
                    }, s().createElement(a, null), s().createElement(h.EY, null, n))
                },
                M = f.ZP;
            var A = n(72981),
                S = n(58850),
                R = n(53216),
                D = n(68101),
                N = n(89151),
                j = n(4013),
                Z = n(45322),
                V = n(72756),
                Y = n(97605),
                B = n(55773),
                F = n(8247),
                W = n(16526),
                H = n(24872),
                K = n(33607),
                q = n(82789),
                J = e => {
                    var {
                        category: t,
                        action: n,
                        label: i,
                        remoteConfigProperty: r
                    } = e, a = (0, w.W6)(r);
                    (0, u.useEffect)((() => {
                        if (a && i) {
                            var e = (0, H.M)();
                            ((e, t) => {
                                var n = (0, q.x)(e);
                                t.send(n)
                            })({
                                category: t,
                                action: n,
                                label: i,
                                os: (0, K.y)(),
                                variant: a
                            }, e)
                        }
                    }), [a, t, n, i, r])
                },
                z = n(29953),
                G = n(84827),
                X = n(81148),
                $ = n(19549),
                Q = n(59819),
                ee = ["metadata", "onCancelClick", "contextUri", "uri", "location"];

            function te(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(n), !0).forEach((function(t) {
                        c()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ie = "context-menu-action-like",
                re = "context-menu-action-share",
                ae = "context-menu-action-view-artist",
                ce = "context-menu-action-view-album",
                oe = "context-menu-action-view-show",
                le = "context-menu-action-view-episode",
                ue = "context-menu-action-view-track",
                se = (0, d.ZP)(S.Z).withConfig({
                    displayName: "RoutedContextMenu__StyledHeartFilledIcon",
                    componentId: "sc-1nhhata-0"
                })(["color:", ";"], C.By7),
                pe = (0, d.ZP)(R.k).withConfig({
                    displayName: "RoutedContextMenu__StyledXIcon",
                    componentId: "sc-1nhhata-1"
                })(["color:", ";"], C.By7),
                ye = e => {
                    var {
                        uri: t,
                        uriType: n,
                        contextUri: i,
                        title: r,
                        subtitle: a,
                        createOnShareClick: c
                    } = e, o = [];
                    return (e => e !== g().Type.EPISODE)(n) && o.push((e => {
                        var {
                            uri: t,
                            contextUri: n,
                            uriType: i,
                            liked: r,
                            createOnLikeClick: a
                        } = e;
                        switch (i) {
                            case g().Type.ARTIST:
                            case g().Type.PLAYLIST:
                            case g().Type.PLAYLIST_V2:
                            case g().Type.SHOW:
                            case g().Type.EPISODE:
                                return [s().createElement(L, {
                                    key: ie,
                                    testID: ie,
                                    icon: r ? pe : D.a,
                                    title: r ? x.ag.get("mwp.context.stop.following") : x.ag.get("mwp.context.follow"),
                                    onClick: a({
                                        uri: t,
                                        contextUri: n,
                                        liked: r
                                    })
                                })];
                            case g().Type.TRACK:
                            case g().Type.ALBUM:
                                return [s().createElement(L, {
                                    key: ie,
                                    testID: ie,
                                    icon: r ? se : N.l,
                                    title: r ? x.ag.get("mwp.context.liked") : x.ag.get("mwp.list.item.like"),
                                    onClick: a({
                                        uri: t,
                                        contextUri: n,
                                        liked: r
                                    })
                                })];
                            default:
                                return []
                        }
                    })(e)), o.push(s().createElement(L, {
                        key: re,
                        icon: j.F,
                        title: x.ag.get("mwp.list.item.share"),
                        onClick: c({
                            uri: t,
                            contextUri: i,
                            title: r,
                            subtitle: a
                        })
                    })), o
                },
                me = e => {
                    var {
                        createOnViewEntityClick: t,
                        artist: n,
                        uri: i,
                        contextUri: r
                    } = e, {
                        uri: a
                    } = n;
                    return [s().createElement(L, {
                        key: ae,
                        icon: D.a,
                        title: x.ag.get("mwp.context.view.artist"),
                        onClick: t({
                            uri: i,
                            contextUri: r,
                            entityUri: a
                        })
                    })]
                },
                de = e => {
                    var {
                        createOnViewEntityClick: t,
                        album: n,
                        uri: i,
                        contextUri: r
                    } = e, {
                        uri: a
                    } = n;
                    return a ? [s().createElement(L, {
                        key: ce,
                        icon: Z.c,
                        title: x.ag.get("mwp.context.view.album"),
                        onClick: t({
                            uri: i,
                            contextUri: r,
                            entityUri: a
                        })
                    })] : []
                },
                ke = e => {
                    var {
                        createOnViewEntityClick: t,
                        track: n,
                        uri: i,
                        contextUri: r
                    } = e, {
                        uri: a
                    } = n;
                    return a ? [s().createElement(L, {
                        key: ue,
                        icon: V.F,
                        title: x.ag.get("mwp.context.view.track"),
                        onClick: t({
                            uri: i,
                            contextUri: r,
                            entityUri: a
                        })
                    })] : []
                },
                ge = e => {
                    var {
                        createOnViewEntityClick: t,
                        show: n = {
                            uri: ""
                        },
                        uri: i,
                        contextUri: r
                    } = e, {
                        uri: a
                    } = n;
                    return a && r !== a ? [s().createElement(L, {
                        key: oe,
                        icon: Y.J,
                        title: x.ag.get("mwp.context.go.to.podcast"),
                        onClick: t({
                            uri: i,
                            contextUri: r,
                            entityUri: a
                        })
                    })] : []
                },
                Ce = e => {
                    var {
                        createOnViewEntityClick: t,
                        uri: n,
                        contextUri: i
                    } = e;
                    return i !== n ? [s().createElement(L, {
                        key: le,
                        icon: Y.J,
                        title: x.ag.get("mwp.context.go.to.episode"),
                        onClick: t({
                            uri: n,
                            contextUri: i,
                            entityUri: n
                        })
                    })] : []
                },
                we = e => {
                    var {
                        createOnViewEntityClick: t,
                        uri: n,
                        contextUri: i,
                        showInternalTrackLinks: r
                    } = e;
                    return r ? [s().createElement(L, {
                        key: ue,
                        icon: V.F,
                        title: x.ag.get("mwp.context.view.track"),
                        onClick: t({
                            uri: n,
                            contextUri: i,
                            entityUri: n
                        })
                    })] : []
                },
                xe = (0, y.$j)((e => {
                    var t, n, {
                            contextMenu: i,
                            entities: r
                        } = e,
                        {
                            likes: a
                        } = r,
                        {
                            contextUri: c,
                            uri: o
                        } = i,
                        l = (null === (t = g().from(c)) || void 0 === t ? void 0 : t.type) || "",
                        u = (null === (n = g().from(o)) || void 0 === n ? void 0 : n.type) || "track";
                    return ne(ne({}, i), {}, {
                        contextUriType: l,
                        uriType: u,
                        liked: !!o && a[o]
                    })
                }), ((e, t) => {
                    var {
                        onLogInteraction: n
                    } = t;
                    return {
                        onCancelClick: () => {
                            var {
                                history: n
                            } = t;
                            e((0, $.J9)(ne(ne({}, n.location), {}, {
                                hash: ""
                            }))), e((0, A.It)())
                        },
                        createOnLikeClick: t => {
                            var {
                                uri: i,
                                liked: r
                            } = t;
                            return () => {
                                e((0, A.It)()), e((0, z.Dw)(i)), n({
                                    type: X.wl.CATEGORY.CLICK,
                                    intent: r ? X.wl.ACTIONS.REMOVE_FROM_LIBRARY : X.wl.ACTIONS.ADD_TO_LIBRARY
                                })
                            }
                        },
                        createOnShareClick: t => {
                            var {
                                uri: n,
                                title: i = "",
                                subtitle: r = ""
                            } = t;
                            return () => {
                                var t = g().from(n).toSecureOpenURL();
                                e((0, z.OW)(i, r, t))
                            }
                        },
                        createOnViewEntityClick: n => {
                            var {
                                entityUri: i
                            } = n;
                            return () => {
                                var {
                                    history: n,
                                    location: r
                                } = t, a = (0, G._T)(i);
                                e((0, A.It)()), n.push({
                                    pathname: a,
                                    state: {
                                        from: r.pathname
                                    }
                                })
                            }
                        }
                    }
                })),
                fe = (0, p.qC)(Q.U, m.EN, xe)((e => {
                    var {
                        metadata: t,
                        onCancelClick: n,
                        contextUri: i,
                        uri: a,
                        location: c
                    } = e, o = l()(e, ee);
                    J({
                        category: "internal_linking_test",
                        action: "remote-config-response",
                        label: null != a ? a : "",
                        remoteConfigProperty: F.LW
                    });
                    var u = (0, w.W6)(F.LW),
                        p = u === F.aO.VARIANT,
                        y = (0, B.vI)(W.k.InternalTrackLinks, c),
                        m = a && i && (e => {
                            var {
                                album: t,
                                artist: n,
                                contextUri: i,
                                contextUriType: r,
                                track: a,
                                uriType: c
                            } = e, o = [...ye(e)];
                            switch (c) {
                                case g().Type.TRACK:
                                    switch (r) {
                                        case g().Type.ARTIST:
                                            return [...o, ...t ? de(e) : [], ...we(e)];
                                        case g().Type.ALBUM:
                                            return [...o, ...n ? me(e) : [], ...we(e)];
                                        case g().Type.TRACK:
                                            return [...o, ...a && a.uri !== i ? ke(e) : [], ...n ? me(e) : [], ...t ? de(e) : []];
                                        case g().Type.PLAYLIST:
                                        case g().Type.PLAYLIST_V2:
                                            return [...o, ...n ? me(e) : [], ...t ? de(e) : [], ...we(e)];
                                        default:
                                            return [...o, ...n ? me(e) : [], ...t ? de(e) : []]
                                    }
                                case g().Type.ARTIST:
                                case g().Type.ALBUM:
                                    return [...o, ...n ? me(e) : []];
                                case g().Type.PLAYLIST:
                                case g().Type.SHOW:
                                    return [...o];
                                case g().Type.EPISODE:
                                    return [...o, ...Ce(e), ...ge(e)];
                                default:
                                    return [...ye(e)]
                            }
                        })(ne(ne({
                            contextUri: i,
                            uri: a,
                            showInternalTrackLinks: p || y
                        }, t), o)) || [],
                        d = t && (e => s().createElement(_, e))(ne(ne({}, t), {}, {
                            type: o.uriType
                        }));
                    return s().createElement(M, r()({
                        metadata: d,
                        actions: m,
                        onCancelClick: n
                    }, o))
                }));
            const he = fe,
                ve = fe
        }
    }
]);
//# sourceMappingURL=mwp-context-menu-container.3747b362.js.map