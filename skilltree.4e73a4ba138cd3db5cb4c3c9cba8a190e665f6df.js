function _createForOfIteratorHelper(t, e) {
    var i = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
    if (!i) {
        if (Array.isArray(t) || (i = _unsupportedIterableToArray(t)) || (e && t && 'number' == typeof t.length)) {
            i && (t = i);
            var s = 0,
                a = function () {};
            return {
                s: a,
                n: function () {
                    return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
                },
                e: function (t) {
                    throw t;
                },
                f: a,
            };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var n,
        r = !0,
        o = !1;
    return {
        s: function () {
            i = i.call(t);
        },
        n: function () {
            var t = i.next();
            return (r = t.done), t;
        },
        e: function (t) {
            (o = !0), (n = t);
        },
        f: function () {
            try {
                r || null == i.return || i.return();
            } finally {
                if (o) throw n;
            }
        },
    };
}
function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ('string' == typeof t) return _arrayLikeToArray(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return 'Object' === i && t.constructor && (i = t.constructor.name), 'Map' === i || 'Set' === i ? Array.from(t) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0;
    }
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), 'value' in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), 'value' in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
}
function _createForOfIteratorHelper(t, e) {
    var i = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
    if (!i) {
        if (Array.isArray(t) || (i = _unsupportedIterableToArray(t)) || (e && t && 'number' == typeof t.length)) {
            i && (t = i);
            var s = 0,
                a = function () {};
            return {
                s: a,
                n: function () {
                    return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
                },
                e: function (t) {
                    throw t;
                },
                f: a,
            };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var n,
        r = !0,
        o = !1;
    return {
        s: function () {
            i = i.call(t);
        },
        n: function () {
            var t = i.next();
            return (r = t.done), t;
        },
        e: function (t) {
            (o = !0), (n = t);
        },
        f: function () {
            try {
                r || null == i.return || i.return();
            } finally {
                if (o) throw n;
            }
        },
    };
}
function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ('string' == typeof t) return _arrayLikeToArray(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return 'Object' === i && t.constructor && (i = t.constructor.name), 'Map' === i || 'Set' === i ? Array.from(t) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0;
    }
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), 'value' in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
}
function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), 'value' in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), 'value' in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), 'value' in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
}
function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
}
function _typeof(t) {
    return (
        (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  }),
        _typeof(t)
    );
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1), (s.configurable = !0), 'value' in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
}
define('PoE/PassiveSkillTree/ObjectList', [], function () {
    return function () {
        (this.init = function () {
            (this.objects = []), (this.priorities = []), (this.priorityToObjects = {});
        }),
            (this.add = function (t, e) {
                (e = void 0 === e ? 0 : e),
                    void 0 === this.priorityToObjects[e] &&
                        (this.priorities.push(e),
                        (this.priorityToObjects[e] = []),
                        this.priorities.sort(function (t, e) {
                            return t - e;
                        })),
                    this.priorityToObjects[e].push(t);
            }),
            (this.remove = function (t) {
                var e = !1;
                for (var i in this.priorityToObjects) for (var s = this.priorityToObjects[i], a = s.length - 1; a >= 0; --a) s[a] === t && (s.splice(a, 1), (e = !0));
                return e;
            }),
            (this.foreachObject = function (t) {
                for (var e = 0, i = this.priorities.length; e < i; ++e) for (var s = this.priorityToObjects[this.priorities[e]], a = 0, n = s.length; a < n; ++a) t(s[a]);
            }),
            this.init();
    };
}),
    define('PoE/PassiveSkillTree/EventContainer', [], function () {
        return function (t) {
            (this.init = function (t) {
                (this.self = t), (this.events = []);
            }),
                (this.trigger = function () {
                    for (var t = 0, e = this.events.length; t < e; ++t) this.events[t].call(this.self);
                }),
                (this.add = function (t) {
                    if (t instanceof Array) for (var e = 0, i = t.length; e < i; ++e) this.add(t[e]);
                    else this.events.push(t);
                }),
                (this.remove = function (t) {
                    for (var e = 0; e < this.events.length; ++e) this.events[e] === t && this.events.splice(e, 1);
                }),
                this.init(t);
        };
    }),
    define('PoE/PassiveSkillTree/PassiveAllocation', [], function () {
        return function (t) {
            (this.init = function () {
                (this.skillTree = t), (this.total = null), (this.characterLevel = 100), (this.extraSkillPoints = 24), (this.skillPointsFromPassive = 0), (this.ascendancySkillPoints = 8), (this.numAllocatedAscendancySkills = 0), (this.numAllocatedSkills = 0), (this.allocatedSkills = {}), (this.canAllocateSkills = {}), (this.allocatedEffects = {}), (this.allocatedExpansionSkills = {}), (this.masteryCount = 0), this.skillTree.points && (this.skillTree.points.totalPoints && (this.total = this.skillTree.points.totalPoints), this.skillTree.points.ascendancyPoints && (this.ascendancySkillPoints = 8));
            }),
                (this.foreachAllocatedSkill = function (t) {
                    for (var e in this.allocatedSkills) t(this.allocatedSkills[e]);
                }),
                (this.isAllocated = function (t) {
                    return void 0 !== this.allocatedSkills[t.skill.getHash()];
                }),
                (this.loadHashArray = function (t, e, i) {
                    this.reset();
                    var s,
                        a = _createForOfIteratorHelper(t);
                    try {
                        for (a.s(); !(s = a.n()).done; ) {
                            if (0 !== (o = s.value)) (l = this.skillTree.getNode(o)) ? (l.isAscendancy ? l.isMultipleChoiceOption || this.numAllocatedAscendancySkills++ : l.isBlightedNode || this.numAllocatedSkills++, l.passivePointsGranted >= 0 && (this.skillPointsFromPassive += l.passivePointsGranted), (this.allocatedSkills[o] = l), l && ((l.active = !0), this.passiveAllocated(l.skill))) : console.log('Hash: ' + o + ' no longer exists in Passive Skill Tree.');
                        }
                    } catch (t) {
                        a.e(t);
                    } finally {
                        a.f();
                    }
                    var n,
                        r = _createForOfIteratorHelper(e);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var o = n.value;
                            this.numAllocatedSkills++, console.warn('Expansion jewel allocations are currently not supported.'), (this.allocatedExpansionSkills[o] = {});
                        }
                    } catch (t) {
                        r.e(t);
                    } finally {
                        r.f();
                    }
                    for (var o in i) {
                        var l;
                        if (0 !== o)
                            if ((l = this.skillTree.getNode(o)) && l.isMastery() && l.masteryData) {
                                if (void 0 === this.allocatedSkills[o]) {
                                    console.warn('Got mastery data for an unallocated skill. Skipping...');
                                    continue;
                                }
                                var h = i[o];
                                l.masteryData.hasEffectId(h) && ((this.allocatedEffects[o] = h), (l.active = !0), this.passiveAllocated(l.skill));
                            }
                    }
                    this.recalcCanAllocateSkills(), this.skillTree.events.pointsChanged.trigger();
                }),
                (this.allocate = function (t, e) {
                    var i = this,
                        s = this.skillTree.getNode(t);
                    if (!this.canAllocate(s, e)) return !1;
                    if (s.isMultipleChoiceOption) {
                        var a = null;
                        if (
                            (s.foreachInNode(function (t) {
                                if (t.isMultipleChoice) return (a = t), !1;
                            }),
                            !a)
                        )
                            return !1;
                        a.foreachOutNode(function (t) {
                            t.isMultipleChoiceOption && i.unallocate(t.id);
                        });
                    }
                    return s.isMastery() && s.masteryData && e && s.masteryData.hasEffectId(e) && (this.allocatedEffects[t] = e), s.isBlightedNode || s.isMultipleChoiceOption || (s.isAscendancy ? this.numAllocatedAscendancySkills++ : this.numAllocatedSkills++), s.passivePointsGranted >= 0 && (this.skillPointsFromPassive += s.passivePointsGranted), (s.active = !0), (this.allocatedSkills[t] = s), this.passiveAllocated(s.skill), this.recalcCanAllocateSkills(), this.skillTree.events.pointsChanged.trigger(), this.skillTree.pushHistoryState(), !0;
                }),
                (this.unallocate = function (t) {
                    var e = this.skillTree.getNode(t);
                    return !!this.canUnallocate(e) && (e.isMastery() && e.masteryData && t in this.allocatedEffects && delete this.allocatedEffects[t], e.isBlightedNode || e.isMultipleChoiceOption || (e.isAscendancy ? this.numAllocatedAscendancySkills-- : this.numAllocatedSkills--), e.passivePointsGranted && (this.skillPointsFromPassive -= e.passivePointsGranted), (e.active = !1), delete this.allocatedSkills[t], this.passiveUnallocated(e.skill), this.recalcCanAllocateSkills(), this.skillTree.events.pointsChanged.trigger(), this.skillTree.pushHistoryState(), !0);
                }),
                (this.canAllocate = function (t, e) {
                    var i = this;
                    if (this.skillTree.readonly) return !1;
                    if (t.active) return !1;
                    if (t === this.skillTree.startNode) return !1;
                    if (void 0 !== this.allocatedSkills[t.id]) return !1;
                    if (t.isAscendancyStartNode) return !1;
                    if (t.isBlightedNode) return !0;
                    if (t.isMastery() && (!t.masteryData || (e && !t.masteryData.hasEffectId(e)))) return !1;
                    if (t.isMultipleChoiceOption)
                        for (var s in t.inNodes) {
                            var a = t.inNodes[s];
                            if (!a.isMultipleChoiceOption && a.isMultipleChoice && a.active) return !0;
                        }
                    return (
                        !(!t.isAscendancy && this.getPassiveSkillPointsAvailable() <= 0) &&
                        !(t.isAscendancy && this.getAscendancyPassiveSkillPointsAvailable() <= 0) &&
                        !!t.findNeighbourNode(function (t) {
                            return !!(t.isClassStartPosition(i.skillTree.characterClass) || ('Atlas' === i.skillTree.tree && t === i.skillTree.startNode)) || (t.active && !t.isMastery());
                        })
                    );
                }),
                (this.canUnallocate = function (t) {
                    return !this.skillTree.readonly && !t.isClassStartNode() && !t.isAscendancyStartNode && (!!t.isBlightedNode || !(!t.isMastery() || !t.masteryData) || (!!this.isAllocatedLeaf(t) && !(t.passivePointsGranted && t.passivePointsGranted > 0 && this.getPassiveSkillPointsAvailable() - t.passivePointsGranted < 0)));
                }),
                (this.isAllocatedLeaf = function (t) {
                    if (!t.active) return !1;
                    if (this.isAffectedJewelNode(t)) return !0;
                    var e = [];
                    for (var i in (this.skillTree.visitNodes(this.skillTree.startNode, [], e, function (e, i) {
                        return i ? e !== t && e.active : null === e.skill || (e !== t && e.active);
                    }),
                    this.allocatedSkills)) {
                        var s = this.allocatedSkills[i];
                        if (!e[s.id]) {
                            if (!s.skill || s.id == t.id) continue;
                            if (this.isAffectedJewelNode(s)) continue;
                            return !1;
                        }
                    }
                    return !0;
                }),
                (this.isAffectedJewelNode = function (t) {
                    for (var e in this.skillTree.jewelSlots)
                        if (this.allocatedSkills[this.skillTree.jewelSlots[e]]) {
                            var i = this.allocatedSkills[this.skillTree.jewelSlots[e]];
                            if (i && i.skill && i.skill.radius) {
                                var s = this.skillTree.getNodePositionInfo(i, i.group).position,
                                    a = this.skillTree.getNodePositionInfo(t, t.group).position,
                                    n = Math.round(Math.sqrt(Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2)));
                                if (!i.skill.radiusMin && n <= i.skill.radius && n > 0) return !0;
                                if (i.skill.radiusMin && n <= i.skill.radius && n >= i.skill.radiusMin) return !0;
                            }
                        }
                    return !1;
                }),
                (this.recalcCanAllocateSkills = function () {
                    var t = this;
                    this.clearCanAllocateSkills();
                    var e = this;
                    for (var i in this.allocatedSkills) {
                        var s = this.allocatedSkills[i];
                        s &&
                            s.foreachNeighbourNode(function (t) {
                                t.active || t.canAllocate || (e.canAllocate(t) && ((t.canAllocate = !0), (e.canAllocateSkills[t.skill.getHash()] = t)));
                            });
                    }
                    this.skillTree.startNode &&
                        this.skillTree.startNode.foreachNeighbourNode(function (e) {
                            e.canAllocate = t.canAllocate(e);
                        });
                }),
                (this.clearCanAllocateSkills = function () {
                    for (var t in this.canAllocateSkills) {
                        this.canAllocateSkills[t].canAllocate = !1;
                    }
                }),
                (this.reset = function () {
                    for (var t in this.allocatedSkills) {
                        var e = this.allocatedSkills[t];
                        (e.active = !1), this.passiveUnallocated(e.skill);
                    }
                    this.clearCanAllocateSkills(), (this.skillPointsFromPassive = 0), (this.numAllocatedSkills = 0), (this.numAllocatedAscendancySkills = 0), (this.allocatedSkills = {}), (this.canAllocateSkills = {}), (this.allocatedEffects = {}), (this.allocatedExpansionSkills = {}), (this.masteryCount = 0), this.skillTree.events.pointsChanged.trigger();
                }),
                (this.getTotalSkillPoints = function () {
                    return this.total ? this.total + this.skillPointsFromPassive : this.extraSkillPoints + this.characterLevel - 1 + this.skillPointsFromPassive;
                }),
                (this.getTotalAscendancySkillPoints = function () {
                    return this.ascendancySkillPoints;
                }),
                (this.getPassiveSkillPointsAvailable = function () {
                    return this.getTotalSkillPoints() - this.numAllocatedSkills;
                }),
                (this.getAscendancyPassiveSkillPointsAvailable = function () {
                    return this.getTotalAscendancySkillPoints() - this.numAllocatedAscendancySkills;
                }),
                (this.passiveAllocated = function () {}),
                (this.passiveUnallocated = function () {}),
                this.init();
        };
    }),
    define('PoE/PassiveSkillTree/JewelAllocation', ['require', './Skill', 'PoE/Item/Item', 'PoE/Backbone/Model/Item/Item', 'PoE/Item/LayoutManager', 'Underscore'], function (t) {
        var e = t('./Skill'),
            i = t('PoE/Item/Item'),
            s = t('PoE/Backbone/Model/Item/Item'),
            a = t('PoE/Item/LayoutManager'),
            n = t('Underscore');
        return (function () {
            function t(e) {
                _classCallCheck(this, t), (this.skillTree = e), (this.allocatedJewels = {}), (this.layoutManager = new a());
            }
            return (
                _createClass(t, [
                    {
                        key: 'loadJewels',
                        value: function () {
                            var t = this;
                            this.skillTree.accountName &&
                                this.skillTree.characterName &&
                                $.ajax({
                                    url: '/character-window/get-passive-skills',
                                    dataType: 'json',
                                    data: { accountName: this.skillTree.accountName, realm: this.skillTree.realm || null, character: this.skillTree.characterName },
                                    success: function (a) {
                                        if (a) {
                                            for (var n in a.items) {
                                                var r = a.items[n],
                                                    o = t.skillTree.jewelSlots[r.x],
                                                    l = t.skillTree.getNode(o),
                                                    h = new i({ enableVerified: !1, enableLeague: !1, showSockets: !1, manualPosition: !0, model: new s($.extend(!0, {}, r)) });
                                                h.render(), (t.allocatedJewels[o] = h);
                                                var c = { skill: o, icon: r.icon, stats: [], name: r.name, item: h, jewel: null };
                                                if (r.x in a.jewel_data) {
                                                    var d = a.jewel_data[r.x];
                                                    c.jewel = { type: d.type, radius: d.radius, radiusMin: d.radiusMin, radiusVisual: d.radiusVisual };
                                                }
                                                (l.prevSkill = l.skill), (l.skill = new e(c));
                                            }
                                            (t.skillTree.drawState.dirty = !0), (t.skillTree.drawState.dirtyFullRedraw = !0);
                                        }
                                    },
                                    fail: function (t) {
                                        console.log(t);
                                    },
                                });
                        },
                    },
                    {
                        key: 'foreachAllocatedJewel',
                        value: function (t) {
                            for (var e in this.allocatedJewels) t(this.allocatedJewels[e]);
                        },
                    },
                    {
                        key: 'jewelAllocated',
                        value: function () {
                            (this.skillTree.drawState.dirty = !0), (this.skillTree.drawState.topDirty = !0);
                        },
                    },
                    {
                        key: 'jewelUnallocated',
                        value: function () {
                            (this.skillTree.drawState.dirty = !0), (this.skillTree.drawState.topDirty = !0);
                        },
                    },
                    {
                        key: 'unLoadJewels',
                        value: function () {
                            var t = this;
                            n.values(this.skillTree.jewelSlots).forEach(function (e) {
                                var i = t.skillTree.getNode(e);
                                i.prevSkill && ((i.skill = i.prevSkill), (i.prevSkill = null));
                            }),
                                (this.skillTree.drawState.dirty = !0),
                                (this.skillTree.drawState.dirtyFullRedraw = !0);
                        },
                    },
                ]),
                t
            );
        })();
    }),
    define('PoE/PassiveSkillTree/Stats', [], function () {
        return function () {
            (this.init = function () {
                this.attributes = [0, 0, 0];
            }),
                (this.getAttribute = function (t) {
                    return this.attributes[t];
                }),
                (this.setAttribute = function (t, e) {
                    (this.attributes[t] = e), this.statsChanged();
                }),
                (this.addAttribute = function (t, e) {
                    (this.attributes[t] += e), this.statsChanged();
                }),
                (this.subAttribute = function (t, e) {
                    (this.attributes[t] -= e), this.statsChanged();
                }),
                (this.statsChanged = function () {}),
                this.init();
        };
    }),
    define('PoE/PassiveSkillTree/Mastery', ['require', 'PoE/Helpers', 'Underscore'], function (t) {
        t('PoE/Helpers');
        var e = t('Underscore');
        return (function () {
            function t(e) {
                _classCallCheck(this, t), (this.hash = e.skill || null), (this.activeIcon = e.activeIcon || null), (this.inactiveIcon = e.inactiveIcon || null), (this.activeEffectImage = e.activeEffectImage || null), (this.displayName = e.name), (this.masteryEffects = e.masteryEffects || []), (this.connected = !1), (this.atlas = e.atlas || !1);
            }
            return (
                _createClass(t, [
                    {
                        key: 'getHash',
                        value: function () {
                            return this.hash;
                        },
                    },
                    {
                        key: 'hasEffectId',
                        value: function (t) {
                            return this.masteryEffects && this.masteryEffects.length && t && e.findWhere(this.masteryEffects, { effect: t });
                        },
                    },
                ]),
                t
            );
        })();
    }),
    define('PoE/PassiveSkillTree/Node', ['./Skill', './Mastery'], function (t, e) {
        var i = function (i, s) {
            (this.init = function () {
                (this.id = i),
                    (this.group = null),
                    (this.orbit = s.orbit),
                    (this.orbitIndex = s.orbitIndex),
                    (this.outNodes = {}),
                    (this.inNodes = {}),
                    (this.classStartIndex = s.classStartIndex),
                    (this.isJewel = s.isJewelSocket),
                    (this.isClusterJewel = !!s.expansionJewel),
                    (this.clusterJewelSize = this.isClusterJewel ? s.expansionJewel.size : null),
                    (this.isAscendancy = s.hasOwnProperty('ascendancyName')),
                    (this.ascendancyName = s.ascendancyName),
                    (this.isAscendancyStartNode = s.isAscendancyStart || !1),
                    (this.isBlightedNode = s.isBlighted || !1),
                    (this.canAllocateWithoutConnection = !1),
                    (this.passivePointsGranted = s.grantedPassivePoints),
                    (this.isMultipleChoice = s.isMultipleChoice),
                    (this.isMultipleChoiceOption = s.isMultipleChoiceOption),
                    (this.hidden = !1),
                    (this.active = !1),
                    (this.canAllocate = !1),
                    (this.renderState = { hover: !1 }),
                    (this.popup = null),
                    (this.clickable = null),
                    (this.similarNodeHighlighter = null),
                    (this.pathHighlighterGroup = null),
                    (this.keystone = s.isKeystone || !1),
                    (this.notable = s.isNotable || !1),
                    (this.mastery = s.isMastery || !1),
                    (this.isProxy = s.isProxy || !1),
                    (this.skill = new t(s)),
                    (this.prevSkill = null),
                    this.mastery && s.masteryEffects && (this.masteryData = new e(s));
            }),
                this.init();
        };
        return (
            (i.prototype.isClassStartNode = function () {
                return null != this.classStartIndex;
            }),
            (i.prototype.isClassStartPosition = function (t) {
                return this.isClassStartNode() && this.classStartIndex === t;
            }),
            (i.prototype.addOutNode = function (t) {
                (this.outNodes[t.skill.getHash()] = t), t.addInNode(this);
            }),
            (i.prototype.addInNode = function (t) {
                this.inNodes[t.skill.getHash()] = t;
            }),
            (i.prototype.setGroup = function (t) {
                this.group = t;
            }),
            (i.prototype.foreachOutNode = function (t) {
                for (var e in this.outNodes) if (!1 === t.call(this, this.outNodes[e])) return;
            }),
            (i.prototype.foreachInNode = function (t) {
                for (var e in this.inNodes) if (!1 === t.call(this, this.inNodes[e])) return;
            }),
            (i.prototype.foreachNeighbourNode = function (t) {
                this.foreachOutNode(t), this.foreachInNode(t);
            }),
            (i.prototype.findNeighbourNode = function (t) {
                for (var e in this.outNodes) if (t.call(this, this.outNodes[e])) return this.outNodes[e];
                for (var e in this.inNodes) if (t.call(this, this.inNodes[e])) return this.inNodes[e];
                return !1;
            }),
            (i.prototype.isKeystone = function () {
                return this.keystone;
            }),
            (i.prototype.isMastery = function () {
                return this.mastery;
            }),
            i
        );
    }),
    define('PoE/PassiveSkillTree/Group', [], function () {
        var t = function (t, e, i, s) {
            (this.id = t), (this.position = e), (this.isProxy = i), (this.background = s), (this.nodes = {}), (this.isAscendancy = !1), (this.ascendancyName = !1), (this.oldPos = !1);
        };
        return (
            (t.prototype.addNode = function (t, e) {
                (this.nodes[t] = e), e.setGroup(this);
            }),
            (t.prototype.getId = function () {
                return this.id;
            }),
            (t.prototype.foreachNode = function (t) {
                for (var e in this.nodes) t.call(this, this.nodes[e]);
            }),
            (t.prototype.isAscendancy = function () {
                return this.isAscendancy;
            }),
            (t.prototype.getAscendancy = function () {
                return this.ascendancyName;
            }),
            (t.prototype.isExpansion = function () {
                return this.isProxy;
            }),
            t
        );
    }),
    define('PoE/PassiveSkillTree/Tile', [], function () {
        return function () {
            (this.canvas = null), (this.dirty = !0);
        };
    }),
    define('PoE/PassiveSkillTree/Clickable', [], function () {
        var t = function (t, e) {
            (this.point = t), (this.radius = e), (this.mouseMoved = !1);
        };
        return (
            (t.prototype.hitTest = function (t) {
                return Math.hypot(t.worldPosition.x - this.point.x, t.worldPosition.y - this.point.y) <= this.radius;
            }),
            (t.prototype.onclickTest = function (t) {
                return !!this.hitTest(t) && (this.onclick(t), !0);
            }),
            (t.prototype.onmousemoveTest = function (t) {
                if (!this.hitTest(t)) return !1;
                (this.mouseMoved = !0), this.onmousemove(t);
            }),
            (t.prototype.forceMouseOut = function () {
                if (!this.mouseMoved) return !1;
                (this.mouseMoved = !1), this.onmouseout();
            }),
            (t.prototype.onmouseoutTest = function (t) {
                return !!this.mouseMoved && !this.hitTest(t) && ((this.mouseMoved = !1), void this.onmouseout());
            }),
            (t.prototype.onclick = function (t) {}),
            (t.prototype.onmousemove = function (t) {}),
            (t.prototype.onmouseout = function (t) {}),
            t
        );
    }),
    define('PoE/PassiveSkillTree/BFS/PathIterator', [], function () {
        return function (t, e) {
            (this.startNode = t),
                (this.nodeRelationshipData = e),
                (this.iterate = function (e) {
                    var i = [],
                        s = this.nodeRelationshipData[t.skill.getHash()].parents;
                    i.push(t);
                    var a = [];
                    for (a.push(t), visited = {}; a.length > 0; ) for (var n = a.pop(), r = this.nodeRelationshipData[n.skill.getHash()], o = 0, l = (s = r.parents).length; o < l; ++o) e(n, s[o], r.depth), void 0 === visited[s[o].skill.getHash()] && ((visited[s[o].skill.getHash()] = !0), a.push(s[o]), i.push(s[o]));
                    return i;
                }),
                (this.getStartNodeDepth = function () {
                    return this.nodeRelationshipData[this.startNode.skill.getHash()].depth;
                });
        };
    }),
    define('PoE/PassiveSkillTree/UtilityFunctions', [], function () {
        return {
            calculateLerpPosition: function (t, e, i) {
                return (e - t) / i;
            },
            calculateFlipPosition: function (t, e, i) {
                var s = (e - t) / i,
                    a = s % 1;
                return 0 == parseInt(s) % 2 ? a : 1 - a;
            },
        };
    }),
    define('PoE/PassiveSkillTree/RGBA', ['./UtilityFunctions'], function (t) {
        return function e(i, s, a, n) {
            (this.r = i || 0),
                (this.g = s || 0),
                (this.b = a || 0),
                (this.a = n || 0),
                (this.addA = function (t) {
                    (this.a += t), this.a > 1 && (this.a = 1);
                }),
                (this.flipBetween = function (e, i, s, a, n, r, o, l) {
                    this.setInterpolatedValue(e, i, t.calculateFlipPosition(s, a, n), t.calculateFlipPosition(s, a, r), t.calculateFlipPosition(s, a, o), t.calculateFlipPosition(s, a, l));
                }),
                (this.lerpBetween = function (e, i, s, a, n, r, o, l) {
                    this.setInterpolatedValue(e, i, t.calculateLerpPosition(s, a, n), t.calculateLerpPosition(s, a, r), t.calculateLerpPosition(s, a, o), t.calculateLerpPosition(s, a, l));
                }),
                (this.setInterpolatedValue = function (t, e, i, s, a, n) {
                    var r = this,
                        o = function (i, s) {
                            t[i] < e[i] ? ((r[i] = t[i] + (e[i] - t[i]) * s), r[i] > e[i] && (r[i] = e[i])) : ((r[i] = t[i] - (t[i] - e[i]) * s), r[i] < e[i] && (r[i] = e[i]));
                        };
                    o('r', i), o('g', s), o('b', a), o('a', n), (this.r = Math.round(this.r)), (this.g = Math.round(this.g)), (this.b = Math.round(this.b));
                }),
                (this.getCanvasRGBA = function () {
                    return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
                }),
                (this.clone = function () {
                    return new e(this.r, this.g, this.b, this.a);
                });
        };
    }),
    define('PoE/PassiveSkillTree/PathHighlighter', ['./BFS/PathIterator', './RGBA'], function (t, e) {
        return function (i, s, a) {
            (this.init = function () {
                (this.skillTree = i),
                    (this.drawObject = null),
                    (this.bfsPathIterator = new t(s, a)),
                    (this.states = { BEGIN: 0, DEFAULT: 1, END: 2 }),
                    (this.state = this.states.BEGIN),
                    (this.params = {}),
                    (this.params[this.states.DEFAULT] = { speed: 1e3, sFillC: new e(50, 50, 255, 0.4), eFillC: new e(50, 50, 255, 0.6), sStrokeC: new e(200, 200, 255, 0.4), eStrokeC: new e(255, 255, 255, 0.6) }),
                    (this.params[this.states.END] = { speed: 100, sFillC: null, sStrokeC: null, eFillC: new e(), eStrokeC: new e(0, 0, 0, 0) }),
                    (this.params[this.states.BEGIN] = { speed: 50, sFillC: new e(255, 255, 255, 1), sStrokeC: new e(255, 255, 255, 1) }),
                    (this.params[this.states.BEGIN].eFillC = this.params[this.states.DEFAULT].sFillC),
                    (this.params[this.states.BEGIN].eStrokeC = this.params[this.states.DEFAULT].sStrokeC),
                    (this.events = { endFunc: function () {} }),
                    (this.start = new Date().getTime()),
                    this.setupDrawObject(),
                    this.begin();
            }),
                (this.setupDrawObject = function () {
                    (this.drawObject = new (function (t) {
                        this.init = function () {
                            (this.highlighter = t), (this.skillTree = t.skillTree), (this.fillC = new e(50, 50, 255, 0.5)), (this.strokeC = new e(50, 50, 255, 0.6)), (this.fillC = new e(50, 50, 255, 0.5)), (this.strokeC = new e(50, 50, 255, 0.6));
                        };
                        var i = this;
                        (this.begin = function () {
                            var t = this.highlighter.params[this.highlighter.states.BEGIN],
                                e = this;
                            setTimeout(function () {
                                e.beginDefault();
                            }, t.speed);
                        }),
                            (this.beginDefault = function (t) {
                                (this.highlighter.start = t || new Date().getTime()), (this.highlighter.state = this.highlighter.states.DEFAULT);
                            }),
                            (this.end = function () {
                                (this.highlighter.state = this.highlighter.states.END), (this.highlighter.params[this.highlighter.states.END].sFillC = this.fillC.clone()), (this.highlighter.params[this.highlighter.states.END].sStrokeC = this.strokeC.clone()), (this.highlighter.start = new Date().getTime());
                                var t = this;
                                setTimeout(function () {
                                    t.endImmediately();
                                }, this.highlighter.params[this.highlighter.states.END].speed);
                            }),
                            (this.endImmediately = function () {
                                this.skillTree.midDrawObjects.remove(this.highlighter.drawObject) && this.highlighter.events.endFunc();
                            }),
                            (this.draw = function () {
                                var t = i.skillTree.midCtx,
                                    e = function (t, e, s) {
                                        var a = e.position,
                                            n = new Date().getTime();
                                        switch (i.highlighter.state) {
                                            case i.highlighter.states.BEGIN:
                                                var r = i.highlighter.params[i.highlighter.states.BEGIN];
                                                i.fillC.lerpBetween(r.sFillC, r.eFillC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed), i.strokeC.lerpBetween(r.sStrokeC, r.eStrokeC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed);
                                                break;
                                            case i.highlighter.states.DEFAULT:
                                                r = i.highlighter.params[i.highlighter.states.DEFAULT];
                                                i.fillC.flipBetween(r.sFillC, r.eFillC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed), i.strokeC.flipBetween(r.sStrokeC, r.eStrokeC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed);
                                                break;
                                            case i.highlighter.states.END:
                                                r = i.highlighter.params[i.highlighter.states.END];
                                                i.strokeC.lerpBetween(r.sStrokeC, r.eStrokeC, i.highlighter.start, n, r.speed, r.speed, r.speed, r.speed);
                                        }
                                        if (i.skillTree.viewPort.bounds.contains(a)) {
                                            var o = i.skillTree.getNodeRadius(t);
                                            if (((a = i.skillTree.worldToScreen(a)), i.skillTree.midCtx.beginPath(), (i.skillTree.midCtx.lineWidth = 2), (i.skillTree.midCtx.strokeStyle = 'rgba(255,255,255,1)'), (i.skillTree.midCtx.fillStyle = 'rgba(255,255,255,1)'), i.skillTree.midCtx.arc(a.x, a.y, o * i.skillTree.viewPort.zoom, 0, 2 * Math.PI, !1), (i.skillTree.midCtx.globalCompositeOperation = 'destination-out'), i.skillTree.midCtx.fill(), i.skillTree.midCtx.stroke(), (i.skillTree.midCtx.strokeStyle = i.strokeC.getCanvasRGBA()), (i.skillTree.midCtx.fillStyle = i.fillC.getCanvasRGBA()), (i.skillTree.midCtx.globalCompositeOperation = 'source-over'), i.skillTree.midCtx.fill(), i.skillTree.midCtx.stroke(), null !== s)) {
                                                var l = 50 * i.skillTree.viewPort.zoom,
                                                    h = i.skillTree.midCtx.measureText(s).width;
                                                i.strokeC.addA(0.3), (i.skillTree.midCtx.fillStyle = i.strokeC.getCanvasRGBA()), (i.skillTree.midCtx.font = l + 'pt FontinBold'), i.skillTree.midCtx.fillText(s, a.x - h / 2, a.y + l / 2);
                                            }
                                        } else
                                            i.skillTree.drawViewportIntersectionPoint(a, function (t) {
                                                i.skillTree.topCtx.beginPath(), (i.skillTree.topCtx.lineWidth = 2), (i.skillTree.topCtx.strokeStyle = i.strokeC.getCanvasRGBA()), (i.skillTree.topCtx.fillStyle = i.fillC.getCanvasRGBA()), i.skillTree.topCtx.arc(t.x, t.y, 2, 0, 2 * Math.PI, !1), i.skillTree.topCtx.fill(), i.skillTree.topCtx.stroke(), (i.skillTree.drawState.topDirty = !0);
                                            });
                                    };
                                i.highlighter.bfsPathIterator.iterate(function (e, s) {
                                    i.skillTree.drawPathBetweenNodes(
                                        e,
                                        s,
                                        function (e, s) {
                                            var a = e.position,
                                                n = s.position;
                                            (a = i.skillTree.worldToScreen(a)), (n = i.skillTree.worldToScreen(n)), t.beginPath(), (t.lineWidth = 3), (t.strokeStyle = i.strokeC.getCanvasRGBA()), t.moveTo(a.x, a.y), t.lineTo(n.x, n.y), t.stroke();
                                        },
                                        function (e, s, a, n) {
                                            (e = i.skillTree.worldToScreen(e)), t.beginPath(), (t.lineWidth = 3), (t.strokeStyle = i.strokeC.getCanvasRGBA()), t.arc(e.x, e.y, n * i.skillTree.viewPort.zoom, s - Math.PI / 2, a - Math.PI / 2, !1), t.stroke();
                                        }
                                    );
                                }),
                                    i.highlighter.bfsPathIterator.iterate(function (t, s, a) {
                                        e(s, i.skillTree.getNodePositionInfo(s), null);
                                    }),
                                    e(i.highlighter.bfsPathIterator.startNode, i.skillTree.getNodePositionInfo(i.highlighter.bfsPathIterator.startNode), i.highlighter.bfsPathIterator.getStartNodeDepth());
                            }),
                            this.init();
                    })(this)),
                        this.skillTree.midDrawObjects.add(this.drawObject, 0);
                }),
                (this.begin = function () {
                    this.drawObject.begin();
                }),
                (this.beginDefault = function (t) {
                    this.drawObject.beginDefault(t);
                }),
                (this.end = function () {
                    this.drawObject.end();
                }),
                (this.endImmediately = function () {
                    this.drawObject.endImmediately();
                }),
                this.init();
        };
    }),
    define('PoE/PassiveSkillTree/PathHighlighterGroup', ['./PathHighlighter'], function (t) {
        return function (e, i) {
            (this.init = function () {
                (this.skillTree = e), (this.shortestPathsSets = i), (this.pathHighlighters = []);
            }),
                (this.begin = function () {
                    this.pathHighlighters = [];
                    for (var e = 0, i = this.shortestPathsSets.length; e < i; ++e) (s = this), (a = this.shortestPathsSets[e]), (s.pathHighlighters[e] = new t(s.skillTree, a.goalNodeData.node, a.nodeRelationshipData));
                    var s, a;
                }),
                (this.end = function () {
                    for (var t = 0, e = this.shortestPathsSets.length; t < e; ++t) this.pathHighlighters[t].end();
                }),
                this.init();
        };
    }),
    define('PoE/PassiveSkillTree/MasteryPopup', ['require', 'plugins', 'PoE/Layout/Popup/Popup', 'PoE/Geom/Point', 'PoE/Geom/Bounds', 'Handlebars', 'Underscore', 'PoE/Helpers'], function (t) {
        var e = t('plugins'),
            i = t('PoE/Layout/Popup/Popup'),
            s = t('PoE/Geom/Point'),
            a = t('PoE/Geom/Bounds'),
            n = t('Handlebars'),
            r = t('Underscore'),
            o =
                (t('PoE/Helpers'),
                (function () {
                    function t(e, s, a) {
                        var n = this;
                        _classCallCheck(this, t),
                            (this.mastery = e),
                            (this.passiveAllocation = s),
                            (this.editable = a),
                            (this.$el = document.createElement('div')),
                            this.render(),
                            (this.popup = new i(this.$el)),
                            this.popup.create(),
                            (this.popup.events.prePosition = function () {
                                n.updatePopupWidth();
                            });
                    }
                    return (
                        _createClass(t, [
                            {
                                key: 'render',
                                value: function () {
                                    var i = this,
                                        s = this.mastery.getHash(),
                                        a = this.passiveAllocation.allocatedEffects[s] || null,
                                        n = r.values(this.passiveAllocation.allocatedEffects);
                                    this.$el.classList.add('masteryPopupContainer'), this.$el.classList.add('masteryPopup'), this.$el.classList.toggle('allocated', this.editable || a);
                                    var o,
                                        l = this.mastery.masteryEffects.slice(),
                                        h = _createForOfIteratorHelper(l);
                                    try {
                                        for (h.s(); !(o = h.n()).done; ) {
                                            var c = o.value,
                                                d = r.contains(n, c.effect);
                                            this.editable ? (c.checked = c.disabled = d) : ((c.checked = d), (c.disabled = c.effect !== a));
                                        }
                                    } catch (t) {
                                        h.e(t);
                                    } finally {
                                        h.f();
                                    }
                                    (this.$el.innerHTML = t.prototype.Template({ name: this.mastery.displayName, hash: this.mastery.hash, masteryEffects: l, selectedEffect: a, editable: this.editable, atlas: this.mastery.atlas }).trim()),
                                        this.editable &&
                                            this.$el.querySelectorAll('.selectable-stat').forEach(function (t) {
                                                var a = parseInt(t.dataset.id);
                                                t.addEventListener('change', function () {
                                                    e(i).trigger('allocateMastery', [s, a]);
                                                });
                                            });
                                },
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    delete this.popup, this.$el.remove();
                                },
                            },
                            {
                                key: 'updatePopupWidth',
                                value: function () {
                                    (this.$el.style.position = 'relative'), (this.$el.style.top = '0'), (this.$el.style.left = '0'), (this.$el.style.width = 'auto');
                                    var t = this.$el.querySelector('.masteryName .lc'),
                                        e = (t ? t.offsetWidth : 0) + 92;
                                    this.$el.querySelectorAll('.masteryIcon').forEach(function (t) {
                                        e = Math.max(e, t.offsetWidth + 14);
                                    });
                                    var i = Math.min(e, 760);
                                    this.$el.style.width = ''.concat(i, 'px');
                                },
                            },
                            {
                                key: 'reposition',
                                value: function (t) {
                                    var e = new s(t.viewport.x + t.x, t.viewport.y + t.y);
                                    if (this.editable) this.popup.positionRight(new a(e, e));
                                    else {
                                        var i = new a(new s(t.viewport.x, t.viewport.y), new s(t.viewport.x + t.viewport.width, t.viewport.y + t.viewport.height));
                                        this.popup.positionSmartLeft(new a(e, e), i);
                                    }
                                },
                            },
                            {
                                key: 'handleMouseClick',
                                value: function (t) {
                                    this.popup.show(), this.reposition(t);
                                },
                            },
                            {
                                key: 'handleMouseover',
                                value: function (t) {
                                    this.popup.show(), this.hoverStart(), this.reposition(t);
                                },
                            },
                            {
                                key: 'handleMouseout',
                                value: function () {
                                    this.popup.hide(), this.hoverEnd();
                                },
                            },
                            {
                                key: 'hoverStart',
                                value: function () {
                                    this.$el.classList.add('hovered');
                                },
                            },
                            {
                                key: 'hoverEnd',
                                value: function () {
                                    this.$el.classList.remove('hovered');
                                },
                            },
                            {
                                key: 'hidePopup',
                                value: function () {
                                    this.popup.hide();
                                },
                            },
                        ]),
                        t
                    );
                })());
        return (
            (o.prototype.Template = n.compile(
                '\n        <div class="masteryHeader">\n            <div class="masteryName">\n                <span class="lc">{{name}}</span>\n            </div>\n        </div>\n        <div class="content">\n        {{#each masteryEffects}}\n            <div class="masteryIcon">\n                <input type="radio" {{#if disabled}}disabled{{/if}} {{#if checked}}checked{{/if}} id="effect-{{effect}}" data-id="{{effect}}"\n                    class="selectable-stat" value="{{effect}}" />\n                <label for="effect-{{effect}}">{{"\n"~}}\n                    <div class="explicitMod">{{#each stats}}{{#if @index}}<br>{{/if}}<span class="lc">{{{this}}}</span>{{/each}}</div>\n                </label>\n                {{#if reminderText}}\n                <div class="descrText">{{#each reminderText}}{{#if @index}}<br>{{/if}}<span class="lc">{{this}}</span>{{/each}}</div>\n                {{/if}}\n            </div>\n        {{/each}}\n        {{#if atlas}}\n        <div class="atlasHoverText"><span class="lc">{{translate "Hover or click to highlight other clusters of the same type"}}</span></div>\n        {{/if}}\n        </div>\n    '
            )),
            o
        );
    }),
    define('PoE/PassiveSkillTree/BFS/NodeData', [], function () {
        return function (t, e) {
            (this.node = t), (this.parents = []), (this.depth = e);
        };
    }),
    define('PoE/PassiveSkillTree/ByteDecoder', [], function () {
        return function () {
            (this.init = function () {
                (this.dataString = ''), (this.position = 0);
            }),
                (this.bytesToInt16 = function (t) {
                    return this.bytesToInt(t, 2);
                }),
                (this.bytesToInt = function (t, e) {
                    e = e || 4;
                    for (var i = 0, s = 0; s < e; ++s) (i += t[s]), s < e - 1 && (i <<= 8);
                    return i;
                }),
                (this.hasData = function () {
                    return this.position < this.dataString.length;
                }),
                (this.getDataString = function () {
                    return this.dataString;
                }),
                (this.setDataString = function (t) {
                    (this.dataString = t), (this.position = 0);
                }),
                (this.readInt8 = function () {
                    return this.readInt(1);
                }),
                (this.readInt16 = function () {
                    return this.readInt(2);
                }),
                (this.readInt = function (t) {
                    t = t || 4;
                    var e = this.position + t;
                    if (e > this.dataString.length) throw 'Integer read exceeds bounds';
                    for (var i = []; this.position < e; ++this.position) i.push(this.dataString.charAt(this.position).charCodeAt(0));
                    return this.bytesToInt(i, t);
                }),
                this.init();
        };
    }),
    define('PoE/PassiveSkillTree/NodeHighlighter/AnimationType', [], function () {
        return { Default: 0, In: 1, Out: 2 };
    }),
    define('PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighter', ['jquery', 'PoE/PassiveSkillTree/RGBA', './AnimationType'], function (t, e, i) {
        return (function () {
            function s(t, a) {
                var n;
                _classCallCheck(this, s),
                    (this.acceptFunc = function (t) {
                        return !0;
                    }),
                    (this.animations = (_defineProperty((n = {}), i.In, { speed: 50, fillColour: { start: new e(255, 255, 255, 0) }, strokeColour: { start: new e(255, 255, 255, 0) } }), _defineProperty(n, i.Default, { speed: 1e3, fillColour: { start: new e(255, 213, 47, 0.3), end: new e(255, 213, 47, 0.6) }, strokeColour: { start: new e(255, 213, 47, 0.4), end: new e(255, 213, 47, 0.7) } }), _defineProperty(n, i.Out, { speed: 100, fillColour: { start: null, end: new e() }, strokeColour: { start: null, end: new e(255, 255, 255, 0) } }), n)),
                    t.atlas && ((this.animations[i.In] = { speed: 200, fillColour: { start: new e(255, 255, 255, 0) }, strokeColour: { start: new e(255, 255, 255, 0) } }), (this.animations[i.Default] = { speed: 1e3, fillColour: { start: new e(255, 255, 255, 0), end: new e(255, 255, 255, 0) }, strokeColour: { start: new e(255, 255, 255, 0.1), end: new e(255, 255, 255, 1) } }), (this.animations[i.Out] = { speed: 200, fillColour: { start: null, end: new e() }, strokeColour: { start: null, end: new e(255, 255, 255, 0) } })),
                    (this.skillTree = t),
                    this.init(a);
            }
            return (
                _createClass(s, [
                    {
                        key: 'draw',
                        value: function () {
                            var t = this,
                                e = new Date().getTime(),
                                s = this.skillTree.viewPort.zoom,
                                a = this.skillTree.viewPort.zoomIndex,
                                n = Math.min(2, a + 1);
                            switch (this.animationState) {
                                case i.In:
                                    var r = this.animations[i.In];
                                    this.fillColour.lerpBetween(r.fillColour.start, r.fillColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed), this.strokeColour.lerpBetween(r.strokeColour.start, r.strokeColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed);
                                    break;
                                case i.Default:
                                    r = this.animations[i.Default];
                                    this.fillColour.flipBetween(r.fillColour.start, r.fillColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed), this.strokeColour.flipBetween(r.strokeColour.start, r.strokeColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed);
                                    break;
                                case i.Out:
                                    r = this.animations[i.Out];
                                    this.fillColour.lerpBetween(r.fillColour.start, r.fillColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed), this.strokeColour.lerpBetween(r.strokeColour.start, r.strokeColour.end, this.start, e, r.speed, r.speed, r.speed, r.speed);
                            }
                            for (var o = 0, l = this.nodes.length; o < l; ++o) {
                                var h = this.nodes[o],
                                    c = this.skillTree.getNodeRadius(h),
                                    d = this.skillTree.getNodePositionInfo(h).position;
                                if (this.skillTree.viewPort.bounds.contains(d)) {
                                    if (((d = this.skillTree.worldToScreen(d)), this.skillTree.midCtx.beginPath(), (this.skillTree.midCtx.strokeStyle = this.strokeColour.getCanvasRGBA()), (this.skillTree.midCtx.fillStyle = this.fillColour.getCanvasRGBA()), (this.skillTree.midCtx.lineWidth = n), this.skillTree.midCtx.arc(d.x, d.y, c * s, 0, 2 * Math.PI, !1), this.skillTree.midCtx.fill(), this.skillTree.midCtx.stroke(), h.isMastery() && this.skillTree.atlas && this.atlasMasteryOverlay)) {
                                        var u = this.skillTree.imageZoomLevels[3],
                                            f = this.skillTree.assets.get('masteryOverlay', h.skill.icon, u);
                                        if (f) {
                                            var v = f.width * (s / u),
                                                p = v / 2;
                                            (v = Math.round(v)), this.skillTree.midCtx.save(), this.skillTree.midCtx.drawImage(f, f.coords.x, f.coords.y, f.width, f.height, Math.round(d.x - p), Math.round(d.y - p), v, v), this.skillTree.midCtx.restore();
                                        }
                                    }
                                } else
                                    this.skillTree.drawViewportIntersectionPoint(d, function (e) {
                                        t.skillTree.topCtx.beginPath(), (t.skillTree.topCtx.lineWidth = 2), (t.skillTree.topCtx.strokeStyle = t.strokeColour.getCanvasRGBA()), (t.skillTree.topCtx.fillStyle = t.fillColour.getCanvasRGBA()), t.skillTree.topCtx.arc(e.x, e.y, 2, 0, 2 * Math.PI, !1), t.skillTree.topCtx.fill(), t.skillTree.topCtx.stroke(), (t.skillTree.drawState.topDirty = !0);
                                    });
                            }
                        },
                    },
                    {
                        key: 'begin',
                        value: function () {
                            var t = this;
                            (this.animations[i.In].fillColour.end = this.animations[i.Default].fillColour.start),
                                setTimeout(function () {
                                    t.beginDefault();
                                }, this.animations[i.In].speed);
                        },
                    },
                    {
                        key: 'beginDefault',
                        value: function (t) {
                            (this.start = t || new Date().getTime()), (this.animationState = i.Default);
                        },
                    },
                    {
                        key: 'end',
                        value: function (e) {
                            var s = t.Deferred(),
                                a = this;
                            return (
                                (this.animationState = i.Out),
                                (this.animations[i.Out].fillColour.start = this.fillColour.clone()),
                                (this.animations[i.Out].strokeColour.start = this.strokeColour.clone()),
                                (this.start = new Date().getTime()),
                                0 === this.animations[i.Out].speed
                                    ? (a.endImmediately(), s.resolve())
                                    : setTimeout(function () {
                                          a.endImmediately(), s.resolve();
                                      }, this.animations[i.Out].speed),
                                s.promise()
                            );
                        },
                    },
                    {
                        key: 'endImmediately',
                        value: function () {
                            this.skillTree.midDrawObjects.remove(this.drawObject);
                        },
                    },
                    {
                        key: 'copyStateFrom',
                        value: function (t) {
                            (this.start = t.start), (this.fillColour = t.fillColour.clone()), (this.strokeColour = t.strokeColour.clone());
                        },
                    },
                    {
                        key: 'init',
                        value: function (t) {
                            (this.atlasMasteryOverlay = !1), t && ((this.atlasMasteryOverlay = t.atlasMasteryOverlay || !1), t.animations && this.configAnimation(t.animations)), (this.fillColour = new e()), (this.strokeColour = new e()), (this.start = new Date().getTime()), (this.nodes = t.nodes || []), (this.animationState = i.In), (this.animations[i.In].fillColour.end = this.animations[i.Default].fillColour.start), (this.animations[i.In].strokeColour.end = this.animations[i.Default].strokeColour.start);
                            var s = this;
                            (this.drawObject = {
                                draw: function () {
                                    s.draw();
                                },
                            }),
                                this.skillTree.midDrawObjects.add(this.drawObject, 10);
                        },
                    },
                    {
                        key: 'setNodes',
                        value: function (t) {
                            this.nodes = t;
                        },
                    },
                    {
                        key: 'configAnimation',
                        value: function (t) {
                            if (t) {
                                var e = function (t, e) {
                                    void 0 !== e.speed && (t.speed = e.speed), e.fillColour && (e.fillColour.start && (t.fillColour.start = e.fillColour.start), e.fillColour.end && (t.fillColour.end = e.fillColour.end)), e.strokeColour && (e.strokeColour.start && (t.strokeColour.start = e.strokeColour.start), e.strokeColour.end && (t.strokeColour.end = e.strokeColour.end));
                                };
                                t && void 0 !== t[i.Default] && e(this.animations[i.Default], t[i.Default]), t && void 0 !== t[i.In] && e(this.animations[i.In], t[i.In]), t && void 0 !== t[i.Out] && e(this.animations[i.Out], t[i.Out]);
                            }
                        },
                    },
                ]),
                s
            );
        })();
    }),
    define('PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighterGroup', [], function () {
        var t = function (t) {
            this.init(t);
        };
        return (
            (t.prototype.foreachHighlighter = function (t) {
                for (var e = 0, i = this.highlighters.length; e < i; ++e) t(this.highlighters[e], e);
            }),
            (t.prototype.begin = function () {
                this.foreachHighlighter(function (t) {
                    t.begin();
                });
            }),
            (t.prototype.beginDefault = function (t) {
                this.foreachHighlighter(function (e) {
                    e.beginDefault(t);
                });
            }),
            (t.prototype.end = function () {
                var t = [];
                return (
                    this.foreachHighlighter(function (e) {
                        t.push(e.end());
                    }),
                    $.when.apply(null, t)
                );
            }),
            (t.prototype.endImmediately = function () {
                this.foreachHighlighter(function (t) {
                    t.endImmediately();
                });
            }),
            (t.prototype.copyStateFrom = function (t) {
                this.foreachHighlighter(function (e, i) {
                    e.copyStateFrom(t.getHighlighter(i));
                });
            }),
            (t.prototype.getHighlighter = function (t) {
                return this.highlighters[t];
            }),
            (t.prototype.init = function (t) {
                t && (this.highlighters = t.highlighters || []);
            }),
            t
        );
    }),
    define('PoE/PassiveSkillTree/SkillPoints', ['require', 'Handlebars', 'jquery', 'PoE/Helpers'], function (t) {
        var e = t('Handlebars'),
            i = t('jquery'),
            s = t('PoE/Helpers'),
            a = (function () {
                function t(e) {
                    _classCallCheck(this, t);
                    var a = document.createElement('div');
                    (this.points = e.points), (this.pointsText = this.getPointsText(this.points, !1)), (this.ascendancyPoints = e.ascendancyPoints), (this.ascendancyPointsText = this.getPointsText(this.ascendancyPoints, !0)), (this.atlas = e.atlas), (this.readonly = e.readonly), (a.innerHTML = t.prototype.Template({ points: this.points, pointsText: this.pointsText, ascendancyPoints: this.ascendancyPoints, ascendancyPointsText: this.ascendancyPointsText, atlas: this.atlas, readonly: this.readonly, readonlyText: s.translate('This tree is in read only mode') }).trim()), (this.$el = a.firstElementChild), 0 === i('#passiveSkillTree .tree-points').length ? this.render() : this.updateText();
                }
                return (
                    _createClass(t, [
                        {
                            key: 'getPointsText',
                            value: function (t, e) {
                                return (e ? s.translate('Ascendancy') + ' ' : '') + (1 === t ? s.translate('Point Left') : s.translate('Points Left'));
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                i('#passiveSkillTree').append(this.$el);
                            },
                        },
                        {
                            key: 'updateText',
                            value: function (t, e) {
                                this.readonly || ((this.points = t), (this.pointsText = this.getPointsText(this.points, !1)), (this.ascendancyPoints = e), (this.ascendancyPointsText = this.getPointsText(this.ascendancyPoints, !0)), i('#treePoints').text(''.concat(this.points, ' ').concat(this.pointsText)), this.atlas || i('#ascendancyPoints').text(''.concat(this.ascendancyPoints, ' ').concat(this.ascendancyPointsText)));
                            },
                        },
                    ]),
                    t
                );
            })();
        return (a.prototype.Template = e.compile('\n        <div id="treePointsContainer" class="tree-points">\n            {{#if readonly}}\n            <div class="FontinBold">{{readonlyText}}</div>\n            {{else}}\n            <div class="tree-points-container FontinBold">\n                <span id="treePoints" class="tree-points-text">{{points}} {{pointsText}}</span>\n            </div>\n            {{#unless atlas}}\n            <div class="tree-points-container FontinBold">\n                <span id="ascendancyPoints" class="tree-points-text ascendancy-points">{{ascendancyPoints}} {{ascendancyPointsText}}</span>\n            </div>\n            {{/unless}}\n            {{/if}}\n        </div>\n    ')), a;
    }),
    define('PoE/PassiveSkillTree/AssetManager', ['require'], function (t) {
        var e = (function () {
            function t(e, i) {
                for (var s in (_classCallCheck(this, t), (this.passiveTree = e), (this.assets = {}), i))
                    for (var a in ((this.assets[s] = {}), i[s])) {
                        var n = i[s][a].filename;
                        for (var r in i[s][a].coords) {
                            var o = i[s][a].coords[r],
                                l = new Image();
                            (l._src = n), (l.name = r), (l.width = o.w), (l.height = o.h), (l.coords = { x: o.x, y: o.y }), void 0 === this.assets[s][r] && (this.assets[s][r] = {}), (this.assets[s][r][a] = l);
                        }
                    }
            }
            return (
                _createClass(t, [
                    {
                        key: 'load',
                        value: function (t) {
                            var e = this;
                            return (
                                t &&
                                    void 0 !== t._src &&
                                    ((t.src = t._src),
                                    delete t._src,
                                    t.complete ||
                                        t.addEventListener(
                                            'load',
                                            function (t) {
                                                e.passiveTree.fullRedraw();
                                            },
                                            { once: !0 }
                                        )),
                                t
                            );
                        },
                    },
                    {
                        key: 'get',
                        value: function (t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                s = this.assets[t][e] || null;
                            return s ? this.load(s[i]) : (console.warn('Missing file '.concat(e, ' at zoom ').concat(i, ' for spritesheet ').concat(t)), null);
                        },
                    },
                ]),
                t
            );
        })();
        return e;
    }),
    define(
        'PoE/PassiveSkillTree/PassiveSkillTree',
        [
            'require',
            'plugins',
            'PoE/Geom/Bounds',
            'PoE/Geom/Point',
            'PoE/PassiveSkillTree/ObjectList',
            'PoE/PassiveSkillTree/EventContainer',
            'PoE/PassiveSkillTree/PassiveAllocation',
            'PoE/PassiveSkillTree/JewelAllocation',
            'PoE/PassiveSkillTree/Stats',
            'PoE/PassiveSkillTree/Node',
            'PoE/PassiveSkillTree/Group',
            'PoE/PassiveSkillTree/Tile',
            'PoE/PassiveSkillTree/Clickable',
            'PoE/PassiveSkillTree/PathHighlighterGroup',
            'PoE/PassiveSkillTree/SkillPopup',
            'PoE/PassiveSkillTree/MasteryPopup',
            'PoE/PassiveSkillTree/Mastery',
            'PoE/PassiveSkillTree/BFS/NodeData',
            'PoE/PassiveSkillTree/ByteDecoder',
            'PoE/PassiveSkillTree/ByteEncoder',
            'PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighter',
            'PoE/PassiveSkillTree/NodeHighlighter/AnimationType',
            'PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighterGroup',
            'PoE/PassiveSkillTree/RGBA',
            'PoE/Helpers',
            'PoE/Item/Item',
            'PoE/Backbone/Model/Item/Item',
            'PoE/PassiveSkillTree/GenerateLink',
            'PoE/PassiveSkillTree/Version',
            'PoE/PassiveSkillTree/SkillPoints',
            'PoE/PassiveSkillTree/AssetManager',
            'Underscore',
            'es6-promise',
        ],
        function (t) {
            var e = t('plugins'),
                i = t('PoE/Geom/Bounds'),
                s = t('PoE/Geom/Point'),
                a = t('PoE/PassiveSkillTree/ObjectList'),
                n = t('PoE/PassiveSkillTree/EventContainer'),
                r = t('PoE/PassiveSkillTree/PassiveAllocation'),
                o = t('PoE/PassiveSkillTree/JewelAllocation'),
                l = t('PoE/PassiveSkillTree/Stats'),
                h = t('PoE/PassiveSkillTree/Node'),
                c = t('PoE/PassiveSkillTree/Group'),
                d = t('PoE/PassiveSkillTree/Tile'),
                u = t('PoE/PassiveSkillTree/Clickable'),
                f = t('PoE/PassiveSkillTree/PathHighlighterGroup'),
                v = t('PoE/PassiveSkillTree/SkillPopup'),
                p = t('PoE/PassiveSkillTree/MasteryPopup'),
                g = t('PoE/PassiveSkillTree/Mastery'),
                y = t('PoE/PassiveSkillTree/BFS/NodeData'),
                w = t('PoE/PassiveSkillTree/ByteDecoder'),
                k = (t('PoE/PassiveSkillTree/ByteEncoder'), t('PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighter')),
                m = t('PoE/PassiveSkillTree/NodeHighlighter/AnimationType'),
                P = t('PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighterGroup'),
                S = t('PoE/PassiveSkillTree/RGBA'),
                C = t('PoE/Helpers'),
                b = (t('PoE/Item/Item'), t('PoE/Backbone/Model/Item/Item'), t('PoE/PassiveSkillTree/GenerateLink')),
                T = t('PoE/PassiveSkillTree/Version'),
                x = t('PoE/PassiveSkillTree/SkillPoints'),
                A = t('PoE/PassiveSkillTree/AssetManager'),
                N = t('Underscore');
            t('es6-promise');
            var E = (function () {
                function t(h, c, d, u, f, v, p) {
                    var g = this;
                    if (
                        (_classCallCheck(this, t),
                        (this.containerEl = e('#' + h)),
                        (this.fullscreenContainerEl = e('#' + c)),
                        p && p.fullscreen ? this.containerEl.css('width', '100vw') : this.containerEl.width(d),
                        this.containerEl.height(u),
                        (this.accountName = !1),
                        (this.characterName = !1),
                        (this.characterClass = !1),
                        (this.ascendancyClass = null),
                        (this.ascendancyClassName = null),
                        (this.ascendancyClasses = v.classes),
                        (this.ascendancyClassPopupHidden = !0),
                        (this.ascendancyStartNode = !1),
                        (this.ascendancyButton = { state: 'AscendancyButton', clickable: !1 }),
                        (this.lastQuery = ''),
                        (this.initialWidth = d),
                        (this.initialHeight = u),
                        (this.$window = e(window)),
                        (this.$bodyEl = e('body')),
                        (this.canvas = document.createElement('canvas')),
                        (this.canvas.width = d),
                        (this.canvas.height = u),
                        this.containerEl.append(this.canvas),
                        (this.$canvas = e(this.canvas)),
                        this.$canvas.attr('id', 'skillTreeMainCanvas'),
                        (this.ctx = this.canvas.getContext('2d')),
                        (this.midCanvas = document.createElement('canvas')),
                        (this.midCanvas.width = this.canvas.width),
                        (this.midCanvas.height = this.canvas.height),
                        this.containerEl.append(this.midCanvas),
                        (this.$midCanvas = e(this.midCanvas)),
                        this.$midCanvas.attr('id', 'skillTreeMidCanvas'),
                        this.$midCanvas.css('pointer-events', 'none'),
                        (this.midCtx = this.midCanvas.getContext('2d')),
                        (this.topCanvas = document.createElement('canvas')),
                        (this.topCanvas.width = this.canvas.width),
                        (this.topCanvas.height = this.canvas.height),
                        this.containerEl.append(this.topCanvas),
                        (this.$topCanvas = e(this.topCanvas)),
                        this.$topCanvas.attr('id', 'skillTreeTopCanvas'),
                        this.$topCanvas.css('pointer-events', 'none'),
                        this.$topCanvas.css('box-shadow', 'inset 0px 0px 10px 10px #000'),
                        (this.topCtx = this.topCanvas.getContext('2d')),
                        (this.scaleFactor = this.canvas.height / 1600),
                        (this.fps = 0),
                        (this.frames = 0),
                        (this.debug = !1),
                        (this.groups = {}),
                        (this.nodes = {}),
                        (this.extent = new i()),
                        (this.tileSize = 512),
                        (this.tiles = []),
                        (this.finalDrawFuncs = []),
                        (this.assets = new A(this, v.sprites)),
                        (this.tree = v.tree || 'Default'),
                        (this.atlas = 'Atlas' === this.tree),
                        (this.characterData = v.classes || null),
                        (this.constants = v.constants),
                        (this.imageZoomLevels = v.imageZoomLevels),
                        (this.skillsPerOrbit = v.constants.skillsPerOrbit),
                        (this.orbitRadii = v.constants.orbitRadii),
                        (this.characterClassToStartNode = {}),
                        (this.ascendancyClassToStartNode = {}),
                        (this.jewelSlots = v.jewelSlots || []),
                        (this.points = v.points || null),
                        (this.readonly = !1),
                        (this.fullScreen = !1),
                        (this.errorMessage = null),
                        (this.settings = { highlightSimilarNodes: !1, highlightShortestPaths: !1 }),
                        (this.allowFullscreenKey = !0),
                        (this.buildUrl = null),
                        (this.mousePos = new s(-1, -1)),
                        (this.midDrawObjects = new a()),
                        (this.events = { classChosen: function () {}, historyUrlSet: function (t) {}, buildUrlSet: function (t) {}, pointsChanged: new n(this), onload: function () {}, onFullScreenUpdate: function () {}, onFullScreenBegin: function () {}, onFullScreenEnd: function () {} }),
                        (this.characterAttributes = [0, 0, 0]),
                        (this.searchHighlighter = null),
                        (this.initializationComplete = e.Deferred()),
                        (this.loadCounter = 0),
                        (this.version = null),
                        (this.realm = null),
                        (this.jewelCircles = {}),
                        p && (p.events && (p.events.classChosen && (this.events.classChosen = p.events.classChosen), p.events.historyUrlSet && (this.events.historyUrlSet = p.events.historyUrlSet), p.events.buildUrlSet && (this.events.buildUrlSet = p.events.buildUrlSet), p.events.onload && (this.events.onload = p.events.onload), p.events.onFullScreenUpdate && (this.events.onFullScreenUpdate = p.events.onFullScreenUpdate), p.events.onFullScreenBegin && (this.events.onFullScreenBegin = p.events.onFullScreenBegin), p.events.onFullScreenEnd && (this.events.onFullScreenEnd = p.events.onFullScreenEnd)), p.noFullscreenKey && (this.allowFullscreenKey = !1), p.readonly && (this.readonly = !0), p.buildUrl && (this.buildUrl = p.buildUrl), (this.version = p.version), (this.realm = p.realm)),
                        (this.passiveAllocation = new r(this)),
                        (this.passiveAllocation.passiveAllocated = function (t) {
                            (g.drawState.dirty = !0), (g.drawState.topDirty = !0), g.characterData && (g.stats.addAttribute(g.constants.characterAttributes.Strength, t.sa), g.stats.addAttribute(g.constants.characterAttributes.Dexterity, t.da), g.stats.addAttribute(g.constants.characterAttributes.Intelligence, t.ia));
                        }),
                        (this.passiveAllocation.passiveUnallocated = function (t) {
                            (g.drawState.dirty = !0), (g.drawState.topDirty = !0), g.characterData && (g.stats.subAttribute(g.constants.characterAttributes.Strength, t.sa), g.stats.subAttribute(g.constants.characterAttributes.Dexterity, t.da), g.stats.subAttribute(g.constants.characterAttributes.Intelligence, t.ia));
                        }),
                        (this.skillPoints = new x({ readonly: this.readonly, atlas: this.atlas, points: this.readonly ? 0 : this.passiveAllocation.getPassiveSkillPointsAvailable(), ascendancyPoints: this.readonly ? 0 : this.passiveAllocation.getAscendancyPassiveSkillPointsAvailable() })),
                        this.events.pointsChanged.add(function () {
                            g.skillPoints && g.skillPoints.updateText(g.readonly ? 0 : g.passiveAllocation.getPassiveSkillPointsAvailable(), g.readonly ? 0 : g.passiveAllocation.getAscendancyPassiveSkillPointsAvailable());
                        }),
                        (this.jewelAllocation = new o(this)),
                        (this.stats = new l()),
                        (this.stats.statsChanged = function () {}),
                        (this.drawState = { dirty: !0, topDirty: !0, dirtyFullRedraw: !0, cancelInProgress: !1, active: !1, idle: !0, lastFrame: null }),
                        this.initLoadingRenderLoop(),
                        this.initGraph(v),
                        this.initViewPort(v, this.imageZoomLevels),
                        this.initListeners(),
                        this.initKeyListeners(),
                        this.initMouseListeners(),
                        this.initTileGrid(),
                        p && p.fullscreen && !this.fullScreen && this.toggleFullScreen(!0),
                        this.characterData)
                    )
                        this.setCharacterClass(f);
                    else {
                        var y = this.getNode('root');
                        y &&
                            (y.foreachOutNode(function (t) {
                                return (g.startNode = t), !1;
                            }),
                            (this.startNode.active = !0),
                            this.passiveAllocation.recalcCanAllocateSkills());
                    }
                    this.endLoadingRenderLoop(),
                        this.events.pointsChanged.trigger(),
                        this.events.onload(),
                        this.initRenderLoop(),
                        this.initializationComplete.resolve(),
                        (window.onpopstate = function (t) {
                            null !== t.state && g.loadStateFromUrl();
                        });
                }
                return (
                    _createClass(t, [
                        {
                            key: 'toggleFullScreen',
                            value: function (t) {
                                if (window.top.location != document.location) {
                                    if (this.fullScreen) return;
                                    this.fullScreen = !0;
                                } else this.fullScreen = !this.fullScreen;
                                this.$bodyEl.css('overflow', this.fullScreen ? 'hidden' : 'visible'), this.updateCanvasSize(), this.fullScreen ? (this.fullscreenContainerEl.append(this.canvas).append(this.midCanvas).append(this.topCanvas), this.events.onFullScreenBegin(), this.updateCanvasSize()) : (this.containerEl.append(this.canvas).append(this.midCanvas).append(this.topCanvas), this.events.onFullScreenEnd()), t || this.pushHistoryState();
                            },
                        },
                        {
                            key: 'updateCanvasSize',
                            value: function () {
                                if (this.fullScreen) {
                                    var t = this.events.onFullScreenUpdate() || { top: '0px', left: '0px', width: this.$window.width(), height: this.$window.height() };
                                    this.$canvas.css('position', 'fixed').css('top', t.top).css('left', t.left), this.$midCanvas.css('position', 'fixed').css('top', t.top).css('left', t.left), this.$topCanvas.css('position', 'fixed').css('top', t.top).css('left', t.left), (this.canvas.width = t.width), (this.canvas.height = t.height), (this.midCanvas.width = t.width), (this.midCanvas.height = t.height), (this.topCanvas.width = t.width), (this.topCanvas.height = t.height);
                                } else this.$canvas.css('position', 'absolute'), this.$midCanvas.css('position', 'absolute'), this.$topCanvas.css('position', 'absolute'), (this.canvas.width = this.initialWidth), (this.canvas.height = this.initialHeight), (this.midCanvas.width = this.initialWidth), (this.midCanvas.height = this.initialHeight), (this.topCanvas.width = this.initialWidth), (this.topCanvas.height = this.initialHeight);
                                this.forceMouseOut(), this.initTileGrid(), this.viewPort.recalcBounds(), (this.drawState.dirtyFullRedraw = !0), (this.drawState.dirty = !0), (this.drawState.topDirty = !0);
                            },
                        },
                        {
                            key: 'isHistorySupported',
                            value: function () {
                                return !(!window.history || !history.pushState);
                            },
                        },
                        {
                            key: 'loadStateFromUrl',
                            value: function () {
                                var t = this,
                                    e = window.location.href;
                                this.initializationComplete.done(function () {
                                    if ('' != window.location.search) {
                                        var i = C.getUrlParameter('accountName'),
                                            s = C.getUrlParameter('characterName');
                                        i && s && ((t.accountName = i), (t.characterName = s)), (e = e.substring(0, e.indexOf(window.location.search)));
                                    }
                                    if (!t.buildUrl) {
                                        var a = e.split('/'),
                                            n = a[a.length - 1],
                                            r = a[a.length - 2],
                                            o = ['passive-skill-tree', 'atlas-skill-tree', 'fullscreen-passive-skill-tree', 'fullscreen-atlas-skill-tree', 'ruthless'];
                                        o.includes(n) || ('' === n && o.includes(r)) || t.loadHistoryUrl('' == n ? r : n);
                                    }
                                });
                            },
                        },
                        {
                            key: 'loadBaseCharacterAttributes',
                            value: function () {
                                this.stats.setAttribute(this.constants.characterAttributes.Strength, this.characterData[this.characterClass].base_str), this.stats.setAttribute(this.constants.characterAttributes.Dexterity, this.characterData[this.characterClass].base_dex), this.stats.setAttribute(this.constants.characterAttributes.Intelligence, this.characterData[this.characterClass].base_int);
                            },
                        },
                        {
                            key: 'pushHistoryState',
                            value: function () {
                                if (this.isHistorySupported()) {
                                    var t = this.getHistoryUrl();
                                    // window.history.pushState(null, '', t), this.events.historyUrlSet(t);
                                }
                            },
                        },
                        {
                            key: 'fullRedraw',
                            value: function () {
                                (this.drawState.dirty = !0), (this.drawState.dirtyFullRedraw = !0);
                            },
                        },
                        {
                            key: 'reset',
                            value: function (t) {
                                this.passiveAllocation.reset();
                                var e = !1;
                                t && t.characterClass >= 0 && this.setCharacterClass(t.characterClass, t.ascendancyClass), t && void 0 !== _typeof(t.accountName) && ((this.accountName = t.accountName), (e = !0)), t && void 0 !== _typeof(t.characterName) && ((this.characterName = t.characterName), (e = !0)), this.lastQuery && '' != this.lastQuery && this.highlightSearchQuery(this.lastQuery), this.pushHistoryState(), e && this.jewelAllocation.unLoadJewels(), this.fullRedraw();
                            },
                        },
                        {
                            key: 'setCharacterClass',
                            value: function (t, e) {
                                (this.characterClass = t), this.setAscendancyClass(e || 0), this.startNode && ((this.startNode.active = !1), this.passiveAllocation.recalcCanAllocateSkills()), this.ascendancyStartNode && (this.ascendancyStartNode.active = !1), (this.startNode = this.characterClassToStartNode[t]), (this.startNode.active = !0), this.ascendancyClassName && ((this.ascendancyStartNode = this.ascendancyClassToStartNode[this.ascendancyClassName]), this.ascendancyStartNode && (this.ascendancyStartNode.active = !0)), this.viewPort.setPosition(this.getNodePositionInfo(this.startNode).position), this.passiveAllocation.recalcCanAllocateSkills(), this.events.classChosen(this.characterClass, this.ascendancyClass);
                            },
                        },
                        {
                            key: 'setAscendancyClass',
                            value: function (t) {
                                if (this.characterClass >= 0 && t > 0) {
                                    var e = this.ascendancyClasses[this.characterClass].ascendancies[t - 1] || null;
                                    if (e) return (this.ascendancyClass = t), void (this.ascendancyClassName = e.id);
                                }
                                (this.ascendancyClassPopupHidden = !0), (this.ascendancyClass = null), (this.ascendancyClassName = null);
                            },
                        },
                        {
                            key: 'loadCharacterData',
                            value: function (t, e, i, s, a) {
                                this.passiveAllocation.reset(), this.setCharacterClass(t, e), this.passiveAllocation.loadHashArray(i, s, a), this.jewelAllocation.loadJewels(), this.events.historyUrlSet(this.getHistoryUrl()), this.fullRedraw();
                            },
                        },
                        {
                            key: 'drawArc',
                            value: function (t, e, i, s, a, n, r) {
                                var o = a - s,
                                    l = o / (Math.PI / 2),
                                    h = o;
                                t.save(), t.translate(Math.round(i.x), Math.round(i.y)), t.scale(r, r), t.rotate(s - Math.PI);
                                var c = e.width + Math.round(('Active' === n ? 0 : 16) * this.viewPort.zoom),
                                    d = e.width - Math.round(('Active' === n ? 44 : 28) * this.viewPort.zoom);
                                t.beginPath(), t.arc(0, 0, c, 0, 2 * Math.PI, !1), t.arc(0, 0, d, 0, 2 * Math.PI, !0), t.closePath(), t.clip();
                                for (var u = 0, f = Math.ceil(l); u < f; ++u) h < Math.PI / 2 ? (t.save(), t.beginPath(), t.moveTo(0, 0), t.arc(0, 0, c, Math.PI, h + Math.PI, !1), t.moveTo(0, 0), t.clip(), t.drawImage(e, e.coords.x, e.coords.y, e.width, e.height, -e.width, -e.height, e.width, e.height), t.restore()) : (t.drawImage(e, e.coords.x, e.coords.y, e.width, e.height, -e.width, -e.height, e.width, e.height), t.rotate(Math.PI / 2), (h -= Math.PI / 2));
                                t.restore();
                            },
                        },
                        {
                            key: 'drawStraightPath',
                            value: function (t, e, i, s, a) {
                                for (
                                    var n = function (t, e, i) {
                                            return (1 - t) * e.x + t * i.x;
                                        },
                                        r = function (t, e, i) {
                                            return (1 - t) * e.y + t * i.y;
                                        },
                                        o = i.distTo(s),
                                        l = e.width * a,
                                        h = o,
                                        c = o / l,
                                        d = 1 / c,
                                        u = i.angleTo(s),
                                        f = 0,
                                        v = 0,
                                        p = Math.ceil(c);
                                    v < p;
                                    ++v
                                ) {
                                    var g = e.width;
                                    h < l && (g = Math.round((g * h) / l)), t.save(), t.translate(Math.round(n(f, i, s)), Math.round(r(f, i, s))), t.scale(a, a), t.rotate(u), t.drawImage(e, e.coords.x, e.coords.y, g, e.height, 0, Math.round(-e.height / 2), g, e.height), t.restore(), (f += d), (h -= l);
                                }
                            },
                        },
                        {
                            key: 'loadWaitAsset',
                            value: function (t) {
                                return new Promise(function (e) {
                                    (t.onload = function () {
                                        e();
                                    }),
                                        (t.onerror = function () {
                                            dfd.resolve();
                                        }),
                                        (t.src = t._src);
                                });
                            },
                        },
                        {
                            key: 'endLoadingRenderLoop',
                            value: function () {
                                window.cancelAnimationFrame(this.loadingRenderLoopIntervalId);
                            },
                        },
                        {
                            key: 'initLoadingRenderLoop',
                            value: function () {
                                var t = this.loadCounter,
                                    e = this;
                                this.loadingRenderLoopIntervalId = window.requestAnimationFrame(function i() {
                                    var s = 0 == t ? 1 : (t - e.loadCounter) / t;
                                    e.drawLoading(s), (e.loadingRenderLoopIntervalId = window.requestAnimationFrame(i));
                                });
                            },
                        },
                        {
                            key: 'initRenderLoop',
                            value: function () {
                                var t = this;
                                setInterval(function () {
                                    (t.fps = t.frames), (t.frames = 0);
                                }, 1e3);
                                var e = this;
                                window.requestAnimationFrame(function t() {
                                    e.draw(), e.frames++, window.requestAnimationFrame(t);
                                });
                            },
                        },
                        {
                            key: 'initGraph',
                            value: function (t) {
                                var e = this,
                                    i = t.nodes.root;
                                (this.rootNode = new h('root', i)),
                                    Object.keys(t.nodes).forEach(function (i) {
                                        var s = new h(i, t.nodes[i]);
                                        e.addNode(i, s), s.isClassStartNode() && (e.characterClassToStartNode[s.classStartIndex] = s), s.isAscendancyStartNode && (e.ascendancyClassToStartNode[s.ascendancyName] = s);
                                    }),
                                    Object.keys(t.groups).forEach(function (i) {
                                        var a = t.groups[i],
                                            n = new c(i, new s(a.x, a.y), a.isProxy, a.background);
                                        a.nodes.forEach(function (t) {
                                            var i = e.getNode(t);
                                            i.ascendancyName && ((n.isAscendancy = !0), (n.ascendancyName = i.ascendancyName)), n.addNode(t, i);
                                        }),
                                            e.addGroup(n);
                                    }),
                                    Object.keys(t.nodes).forEach(function (i) {
                                        var s = e.getNode(i),
                                            a = t.nodes[i];
                                        a.out &&
                                            a.out.length &&
                                            a.out.forEach(function (t) {
                                                var i = e.getNode(t);
                                                (s.group && i.group && s.group !== i.group && s.group.isExpansion() !== i.group.isExpansion()) || s.addOutNode(i);
                                            });
                                    });
                            },
                        },
                        {
                            key: 'getShortestPathsFromActiveNodes',
                            value: function (t) {
                                var e = this,
                                    i = -1,
                                    s = [],
                                    a = function (a) {
                                        e.visitBFS(
                                            a,
                                            function (e) {
                                                return e === t;
                                            },
                                            function (t) {
                                                return !e.passiveAllocation.isAllocated(t) && !t.isClassStartNode() && !t.isAscendancy;
                                            },
                                            function (t, e) {
                                                s.push({ goalNodeData: t, nodeRelationshipData: e }), (-1 == i || t.depth < i) && (i = t.depth);
                                                for (var a = s.length - 1; a >= 0; --a) s[a].goalNodeData.depth > i && s.splice(a, 1);
                                            }
                                        );
                                    };
                                return a(this.startNode), this.passiveAllocation.foreachAllocatedSkill(a), s;
                            },
                        },
                        {
                            key: 'recalculateExtent',
                            value: function () {
                                this.extent = this.defaultExtent.clone();
                                var t = this.canvas.width / this.viewPort.zoom,
                                    e = this.canvas.height / this.viewPort.zoom;
                                this.extent.width() < t && this.extent.width(t), this.extent.height() < e && this.extent.height(e), this.atlas ? this.extent.horizontalCenterAt(new s()) : this.extent.centerAt(new s());
                            },
                        },
                        {
                            key: 'initTileGrid',
                            value: function () {
                                (this.grid = {}), (this.grid.xTiles = Math.ceil((this.extent.width() * this.viewPort.zoom) / this.tileSize) + 1), (this.grid.yTiles = Math.ceil((this.extent.height() * this.viewPort.zoom) / this.tileSize) + 1), (this.grid.tiles = []);
                                for (var t = 0; t < this.grid.yTiles; ++t) {
                                    this.grid.tiles[t] = [];
                                    for (var e = 0; e < this.grid.xTiles; ++e) this.grid.tiles[t][e] = new d();
                                }
                            },
                        },
                        {
                            key: 'calcTileGrid',
                            value: function () {
                                (this.grid.lExtentToLVisGridOffsetPx = Math.max(this.viewPort.bounds.tl.x - this.extent.tl.x, 0) * this.viewPort.zoom),
                                    (this.grid.tExtentToTVisGridOffsetPx = Math.max(this.viewPort.bounds.tl.y - this.extent.tl.y, 0) * this.viewPort.zoom),
                                    (this.grid.lExtentToRVisGridOffsetPx = Math.max(this.viewPort.bounds.br.x - this.extent.tl.x, 0) * this.viewPort.zoom),
                                    (this.grid.tExtentToBVisGridOffsetPx = Math.max(this.viewPort.bounds.br.y - this.extent.tl.y, 0) * this.viewPort.zoom),
                                    (this.grid.lExtentToLVisGridOffsetTiles = this.grid.lExtentToLVisGridOffsetPx / this.tileSize),
                                    (this.grid.tExtentToTVisGridOffsetTiles = this.grid.tExtentToTVisGridOffsetPx / this.tileSize),
                                    (this.grid.lExtentToRVisGridOffsetTiles = this.grid.lExtentToRVisGridOffsetPx / this.tileSize),
                                    (this.grid.tExtentToBVisGridOffsetTiles = this.grid.tExtentToBVisGridOffsetPx / this.tileSize),
                                    (this.grid.visGridWidthTiles = this.grid.lExtentToRVisGridOffsetTiles - this.grid.lExtentToLVisGridOffsetTiles),
                                    (this.grid.visGridHeightTiles = this.grid.tExtentToBVisGridOffsetTiles - this.grid.tExtentToTVisGridOffsetTiles),
                                    (this.grid.visGridStartXTilePos = Math.floor(this.grid.lExtentToLVisGridOffsetTiles)),
                                    (this.grid.visGridStartYTilePos = Math.floor(this.grid.tExtentToTVisGridOffsetTiles)),
                                    (this.grid.visGridXTileviewPortShift = this.grid.lExtentToLVisGridOffsetTiles - this.grid.visGridStartXTilePos),
                                    (this.grid.visGridYTileviewPortShift = this.grid.tExtentToTVisGridOffsetTiles - this.grid.visGridStartYTilePos),
                                    (this.grid.drawTileW = Math.ceil(this.grid.visGridWidthTiles) + Math.ceil(this.grid.visGridXTileviewPortShift)),
                                    (this.grid.drawTileH = Math.ceil(this.grid.visGridHeightTiles) + Math.ceil(this.grid.visGridYTileviewPortShift)),
                                    (this.grid.visGridXviewPortShift = this.grid.visGridXTileviewPortShift * this.tileSize),
                                    (this.grid.visGridYviewPortShift = this.grid.visGridYTileviewPortShift * this.tileSize);
                            },
                        },
                        {
                            key: 'initViewPort',
                            value: function (t) {
                                (this.viewPort = { skillTree: this, position: new s(), bounds: new i(), moveStartView: null, moveStartWorld: null, zoomLevels: this.imageZoomLevels, zoomIndex: 0, zoom: this.imageZoomLevels[0] }),
                                    (this.viewPort.zoomIn = function () {
                                        this.zoomIndex != this.zoomLevels.length - 1 && (++this.zoomIndex, (this.zoom = this.zoomLevels[this.zoomIndex]), this.recalcBounds());
                                    }),
                                    (this.viewPort.zoomOut = function () {
                                        this.zoomIndex <= 0 || (--this.zoomIndex, (this.zoom = this.zoomLevels[this.zoomIndex]), this.recalcBounds());
                                    }),
                                    (this.viewPort.recalcBounds = function () {
                                        var t = !1;
                                        this.skillTree.recalculateExtent(),
                                            this.bounds.width(this.skillTree.canvas.width / this.zoom),
                                            this.bounds.height(this.skillTree.canvas.height / this.zoom),
                                            this.bounds.centerAt(this.position),
                                            this.bounds.br.x > this.skillTree.extent.br.x && ((this.position.x = this.skillTree.extent.br.x - this.bounds.width() / 2), (t = !0)),
                                            this.bounds.br.y > this.skillTree.extent.br.y && ((this.position.y = this.skillTree.extent.br.y - this.bounds.height() / 2), (t = !0)),
                                            this.bounds.tl.x < this.skillTree.extent.tl.x && ((this.position.x = this.skillTree.extent.tl.x + this.bounds.width() / 2), (t = !0)),
                                            this.bounds.tl.y < this.skillTree.extent.tl.y && ((this.position.y = this.skillTree.extent.tl.y + this.bounds.height() / 2), (t = !0)),
                                            t && this.bounds.centerAt(this.position);
                                    }),
                                    (this.viewPort.beginMove = function (t, e) {
                                        (this.moveStartView = new s(t, e)), (this.moveStartWorld = this.position.clone());
                                    }),
                                    (this.viewPort.endMove = function () {
                                        (this.moveStartView = null), (this.moveStartWorld = null);
                                    }),
                                    (this.viewPort.updateMove = function (t, e) {
                                        return null !== this.moveStartView && (this.moveStartView.x != t || this.moveStartView.y != e) && ((this.position = this.moveStartWorld.clone()), this.position.translateX((this.moveStartView.x - t) / this.zoom), this.position.translateY((this.moveStartView.y - e) / this.zoom), this.recalcBounds(), !0);
                                    }),
                                    (this.viewPort.setPosition = function (t) {
                                        (this.position = t), this.recalcBounds();
                                    }),
                                    (this.extent.tl.x = t.min_x),
                                    (this.extent.tl.y = t.min_y),
                                    (this.extent.br.x = t.max_x),
                                    (this.extent.br.y = t.max_y),
                                    this.extent.grow(2 * this.getOrbitRadius(4) + 900),
                                    (this.defaultExtent = this.extent.clone()),
                                    this.viewPort.recalcBounds();
                            },
                        },
                        {
                            key: 'initListeners',
                            value: function () {
                                var t = this;
                                this.$window.resize(function () {
                                    t.fullScreen && t.updateCanvasSize();
                                });
                            },
                        },
                        {
                            key: 'initKeyListeners',
                            value: function () {
                                var t = this;
                                this.$window.keypress(function (e) {
                                    switch (e.which) {
                                        case 61:
                                            t.viewPort.zoomIn(), t.initTileGrid(), (t.drawState.dirty = !0), t.trigMouseMoveHandler();
                                            break;
                                        case 45:
                                            t.viewPort.zoomOut(), t.initTileGrid(), (t.drawState.dirty = !0), t.trigMouseMoveHandler();
                                            break;
                                        case 102:
                                            t.allowFullscreenKey && t.toggleFullScreen();
                                            break;
                                        case 100:
                                            (t.debug = !t.debug), (t.drawState.topDirty = !0);
                                    }
                                });
                            },
                        },
                        {
                            key: 'clickHandler',
                            value: function (t, e) {
                                var i = this.$canvas.offset(),
                                    s = { x: t, y: e, viewport: { x: i.left, y: i.top, width: this.canvas.width, height: this.canvas.height }, worldPosition: this.getScreenWorldPosition(t, e) };
                                this.foreachClickable(function (t) {
                                    return t.onclickTest(s);
                                });
                            },
                        },
                        {
                            key: 'trigMouseMoveHandler',
                            value: function () {
                                this.mouseMoveHandler(this.mousePos.x, this.mousePos.y);
                            },
                        },
                        {
                            key: 'mouseLeaveHander',
                            value: function () {
                                this.mouseUpHandler();
                            },
                        },
                        {
                            key: 'mouseUpHandler',
                            value: function () {
                                this.viewPort.endMove(), (this.drawState.dirty = !0);
                            },
                        },
                        {
                            key: 'mouseMoveHandler',
                            value: function (t, e) {
                                var i = this.$canvas.offset(),
                                    s = { x: t, y: e, viewport: { x: i.left, y: i.top, width: this.canvas.width, height: this.canvas.height }, worldPosition: this.getScreenWorldPosition(t, e) };
                                this.foreachClickable(function (t) {
                                    t.onmousemoveTest(s), t.onmouseoutTest(s);
                                });
                            },
                        },
                        {
                            key: 'forceMouseOut',
                            value: function () {
                                this.foreachClickable(function (t) {
                                    return t.forceMouseOut();
                                });
                            },
                        },
                        {
                            key: 'foreachVisibleGridTile',
                            value: function (t) {
                                for (var e = 0; e < this.grid.drawTileH; ++e)
                                    for (var i = 0; i < this.grid.drawTileW; ++i) {
                                        var s = i + this.grid.visGridStartXTilePos,
                                            a = e + this.grid.visGridStartYTilePos;
                                        if (!(s >= this.grid.xTiles || a >= this.grid.yTiles) && !0 === t.call(this, this.grid.tiles[a][s], s, a, i, e)) return;
                                    }
                            },
                        },
                        {
                            key: 'initMouseListeners',
                            value: function () {
                                var t = this;
                                this.$canvas.mousedown(function (e) {
                                    if (3 !== e.which) {
                                        var i = t.$canvas.offset();
                                        e.preventDefault(), t.viewPort.beginMove(e.pageX, e.pageY), t.clickHandler(e.pageX - i.left, e.pageY - i.top);
                                    }
                                }),
                                    this.$canvas.mouseup(function (e) {
                                        3 !== e.which && t.mouseUpHandler();
                                    }),
                                    this.$canvas.mousemove(function (e) {
                                        var i = t.$canvas.offset();
                                        (t.mousePos.x = e.pageX - i.left), (t.mousePos.y = e.pageY - i.top), t.trigMouseMoveHandler(), t.viewPort.updateMove(e.pageX, e.pageY) && (t.drawState.dirty = !0);
                                    }),
                                    this.$canvas.mouseout(function () {
                                        t.mouseLeaveHander(), t.forceMouseOut();
                                    }),
                                    e(this.$canvas).bind('mousewheel', function (e, i) {
                                        for (var s = 0; s < i; ++s) t.viewPort.zoomIn();
                                        for (s = 0; s > i; --s) t.viewPort.zoomOut();
                                        return t.initTileGrid(), t.trigMouseMoveHandler(), (t.drawState.dirty = !0), !1;
                                    });
                            },
                        },
                        {
                            key: 'drawDebug',
                            value: function () {
                                (this.topCtx.fillStyle = 'rgb(20,200,20)'), (this.topCtx.font = '10pt Arial'), this.topCtx.fillText('Zoom: ' + this.viewPort.zoom, 10, 30), this.topCtx.fillText('FPS: ' + this.fps, 10, 60), (this.drawState.topDirty = !0);
                            },
                        },
                        {
                            key: 'drawDebugGridInfo',
                            value: function () {
                                (this.topCtx.fillStyle = 'rgb(20,200,20)'), (this.topCtx.font = '10pt Arial');
                                var t = 60;
                                this.topCtx.fillText('Visible grid | Tile W: ' + Number(this.grid.visGridWidthTiles).toFixed(2) + ', Tile H: ' + Number(this.grid.visGridWidthTiles).toFixed(2) + ', XS: ' + Number(this.grid.visGridXviewPortShift).toFixed(2) + ', YS: ' + Number(this.grid.visGridYviewPortShift).toFixed(2), 10, (t += 30)), this.topCtx.fillText('Visible grid | Start X Tile: ' + this.grid.visGridStartXTilePos + ', Start Y Tile: ' + this.grid.visGridStartYTilePos, 10, (t += 30)), this.topCtx.fillText('Draw grid | W: ' + this.grid.drawTileW + ', H: ' + this.grid.drawTileH, 10, (t += 30)), this.topCtx.fillText('Grid | W: ' + this.grid.tiles[0].length + ', H: ' + this.grid.tiles.length, 10, (t += 30)), (this.drawState.topDirty = !0);
                            },
                        },
                        {
                            key: 'getCurrentImageZoomLevel',
                            value: function () {
                                for (var t = this.imageZoomLevels.length, e = 0; e < t; ++e) if (this.viewPort.zoom <= this.imageZoomLevels[e]) return this.imageZoomLevels[e];
                                return this.imageZoomLevels[t - 1];
                            },
                        },
                        {
                            key: 'drawTile',
                            value: function (t, e, a) {
                                var n = this;
                                if (!t.dirty && !this.drawState.dirtyFullRedraw) return !1;
                                null === t.canvas && ((t.canvas = document.createElement('canvas')), (t.canvas.width = this.tileSize), (t.canvas.height = this.tileSize));
                                var r = t.canvas,
                                    o = r.getContext('2d'),
                                    l = (r.width, r.height, this.getCurrentImageZoomLevel()),
                                    h = a / l,
                                    c = new i();
                                (c.tl.x = e.x), (c.tl.y = e.y), c.width(r.width / a), c.height(r.height / a);
                                var d = c.clone();
                                if ((d.grow(2 * this.getOrbitRadius(4) + 900), this.drawBackgroundTile(o, e, l, h), 'Royale' === this.tree)) {
                                    var u = new s(0, 3);
                                    if (d.contains(u)) {
                                        var f = u.clone();
                                        f.inverseTranslate(c.tl), f.scale(a);
                                        var v = (k = (w = this.assets.get('royale', 'RoyalePassiveCentrePiece', l)).width * h * 1.165) / 2,
                                            p = (m = w.height * h * 1.165) / 2;
                                        o.drawImage(w, w.coords.x, w.coords.y, w.width, w.height, Math.round(f.x - v), Math.round(f.y - p), Math.round(k), Math.round(m));
                                    }
                                    ['RoyalePassiveMelee', 'RoyalePassiveProjectiles', 'RoyalePassiveCritDamageOverTime', 'RoyalePassiveSpells', 'RoyalePassiveElementalDamage', 'RoyalePassivePhysicalDamage'].forEach(function (t, e) {
                                        var i = ((2 * Math.PI) / 6) * e,
                                            s = u.clone();
                                        if (((s.x += 2e3 * Math.sin(i)), (s.y += 2e3 * Math.cos(i)), d.contains(s))) {
                                            s.inverseTranslate(c.tl), s.scale(a);
                                            var r = n.assets.get('royale', t, l),
                                                f = r.width * h * 1.2,
                                                v = r.height * h * 1.2,
                                                p = f / 2,
                                                g = v / 2;
                                            o.drawImage(r, r.coords.x, r.coords.y, r.width, r.height, Math.round(s.x - p), Math.round(s.y - g), Math.round(f), Math.round(v));
                                        }
                                    });
                                } else if (this.atlas) {
                                    var g = Math.round((this.extent.tl.y - this.extent.br.y) / 2.95),
                                        y = new s(-60, g);
                                    y.inverseTranslate(c.tl), y.scale(a);
                                    var w, k, m;
                                    (v = (k = 2.8173 * (w = this.assets.get('atlasBackground', 'AtlasPassiveBackground', l)).width) / 2), (p = (m = 2.8173 * w.height) / 2);
                                    o.drawImage(w, w.coords.x, w.coords.y, w.width, w.height, Math.round(y.x - v), Math.round(y.y - p), Math.round(k), Math.round(m));
                                }
                                this.foreachGroup(function (t) {
                                    if (d.contains(t.position) && !t.isAscendancy) {
                                        var e = t.position.clone();
                                        e.inverseTranslate(c.tl),
                                            e.scale(a),
                                            n.drawGroupBackground(o, t, e, a, l, h),
                                            'Default' === n.tree &&
                                                t.foreachNode(function (t) {
                                                    if (t.isClassStartNode()) {
                                                        var e = n.getNodePositionInfo(t).position;
                                                        e.inverseTranslate(c.tl), e.scale(a), n.drawStartNodeBackground(o, e, l, h, t.classStartIndex);
                                                    }
                                                });
                                    }
                                });
                                var P = this.ascendancyStartNode.group;
                                if (P && this.isAscendancyGroupEnabled(P)) {
                                    var S = this.getAscendancyPositionInfo();
                                    P.oldPos || (P.oldPos = P.position.clone()), (P.position = new s(S.classArtImgPoint.x, S.classArtImgPoint.y));
                                }
                                return (
                                    this.foreachGroup(function (t) {
                                        if (!n.isAscendancyGroupEnabled(t) || t.id == P.id || t.oldPos) t.isAscendancy || n.drawGroupNodePaths(t, o, c, d);
                                        else {
                                            t.oldPos = t.position.clone();
                                            var e = new s(P.position.x - P.oldPos.x, P.position.y - P.oldPos.y);
                                            t.position = new s(t.oldPos.x + e.x, t.oldPos.y + e.y);
                                        }
                                    }),
                                    this.foreachGroup(function (t) {
                                        d.contains(t.position) &&
                                            (t.isAscendancy ||
                                                n.drawGroupNodes(t, o, a, l, h, c, function (t) {
                                                    return !t.isAscendancy;
                                                }));
                                    }),
                                    this.drawCircles(o),
                                    this.drawAscendancyClassBackground(o, c),
                                    this.drawAscendancyClassText(o, c),
                                    this.drawStartNodeAscendancyButton(o, c),
                                    this.foreachGroup(function (t) {
                                        n.isAscendancyGroupEnabled(t) && n.drawGroupNodePaths(t, o, c, d);
                                    }),
                                    this.foreachGroup(function (t) {
                                        n.isAscendancyGroupEnabled(t) &&
                                            n.drawGroupNodes(t, o, a, l, h, c, function (e) {
                                                return n.isAscendancyGroupEnabled(t);
                                            });
                                    }),
                                    (t.dirty = !1),
                                    !0
                                );
                            },
                        },
                        {
                            key: 'drawGroupNodes',
                            value: function (t, i, a, n, r, o, l) {
                                var h = this;
                                t.foreachNode(function (c) {
                                    if (l(c)) {
                                        var d = h.getNodePositionInfo(c, t),
                                            y = d.position.clone(),
                                            w = d.position;
                                        if ((w.inverseTranslate(o.tl), w.scale(a), void 0 === c.classStartIndex))
                                            if (h.atlas && c === h.startNode) {
                                                var k = h.getNodePositionInfo(c).position;
                                                k.inverseTranslate(o.tl), k.scale(a);
                                                var m = h.assets.get('startNode', 'AtlasPassiveSkillScreenStart', n),
                                                    P = m.width * r,
                                                    S = m.height * r,
                                                    C = P / 2,
                                                    b = S / 2;
                                                i.drawImage(m, m.coords.x, m.coords.y, m.width, m.height, Math.round(k.x - C), Math.round(k.y - b), Math.round(P), Math.round(S));
                                            } else {
                                                var T = null,
                                                    x = c.skill ? c.skill.icon : null;
                                                if (c.isMastery()) {
                                                    if (((T = 'mastery'), c.masteryData))
                                                        if (c.active) (T = 'masteryActiveSelected'), (x = c.masteryData.activeIcon);
                                                        else {
                                                            var A = !1;
                                                            for (var N in c.inNodes) {
                                                                if (c.inNodes[N].active) {
                                                                    A = !0;
                                                                    break;
                                                                }
                                                            }
                                                            if (((T = 'mastery'.concat(A ? 'Connected' : 'Inactive')), (x = c.masteryData.inactiveIcon), A)) {
                                                                var E = h.assets.get('masteryActiveSelected', 'PassiveMasteryConnectedButton', n);
                                                                if (E) {
                                                                    var M = (R = E.width * r) / 2;
                                                                    (R = Math.round(R)), i.drawImage(E, E.coords.x, E.coords.y, E.width, E.height, Math.round(w.x - M), Math.round(w.y - M), R, R);
                                                                }
                                                            }
                                                        }
                                                } else T = c.notable ? 'notable' + (c.active ? 'Active' : 'Inactive') : c.isKeystone() ? 'keystone' + (c.active ? 'Active' : 'Inactive') : c.skill.isJewel() || c.isAscendancyStartNode ? null : 'normal' + (c.active ? 'Active' : 'Inactive');
                                                if (T && x) {
                                                    var I = h.assets.get(T, x, n);
                                                    if (I) {
                                                        var O = I.width * r,
                                                            H = O / 2;
                                                        (O = Math.round(O)), i.drawImage(I, I.coords.x, I.coords.y, I.width, I.height, Math.round(w.x - H), Math.round(w.y - H), O, O);
                                                    }
                                                }
                                                if (!c.isMastery()) {
                                                    var D = null;
                                                    if (c.isKeystone()) D = h.assets.get('frame', 'KeystoneFrame' + (c.active ? 'Allocated' : c.canAllocate ? 'CanAllocate' : 'Unallocated'), n);
                                                    else if (c.notable) D = c.isAscendancy ? h.assets.get('ascendancy', 'AscendancyFrameLarge' + (c.active ? 'Allocated' : c.canAllocate ? 'CanAllocate' : 'Normal'), n) : c.isBlightedNode ? h.assets.get('frame', 'BlightedNotableFrame' + (c.active ? 'Allocated' : c.canAllocate ? 'CanAllocate' : 'Unallocated'), n) : h.assets.get('frame', 'NotableFrame' + (c.active ? 'Allocated' : c.canAllocate ? 'CanAllocate' : 'Unallocated'), n);
                                                    else if (c.isAscendancyStartNode) D = h.assets.get('ascendancy', 'AscendancyMiddle', n);
                                                    else if (c.isAscendancy) D = h.assets.get('ascendancy', 'AscendancyFrameSmall' + (c.active ? 'Allocated' : c.canAllocate ? 'CanAllocate' : 'Normal'), n);
                                                    else if (c.isClusterJewel) {
                                                        var G = 'JewelSocketAlt';
                                                        c.canAllocate ? (G += 'CanAllocate') : c.active ? (G += 'Active') : (G += 'Normal'), (D = h.assets.get('frame', G, n));
                                                    } else if (c.isJewel) {
                                                        G = 'JewelFrame';
                                                        c.canAllocate ? (G += 'CanAllocate') : c.active ? (G += 'Allocated') : (G += 'Unallocated'), (D = h.assets.get('frame', G, n));
                                                    } else D = c.active ? h.assets.get('frame', 'PSSkillFrameActive', n) : c.canAllocate ? h.assets.get('frame', 'PSSkillFrameHighlighted', n) : h.assets.get('frame', 'PSSkillFrame' + (c.active ? 'Active' : ''), n);
                                                    if (D) {
                                                        M = (R = D.width * r) / 2;
                                                        (R = Math.round(R)), i.drawImage(D, D.coords.x, D.coords.y, D.width, D.height, Math.round(w.x - M), Math.round(w.y - M), R, R);
                                                    }
                                                }
                                                if (c.isClusterJewel && !c.skill.isJewel()) {
                                                    var B = 'JewelSocketClusterAlt';
                                                    switch (((B += c.canAllocate || c.active ? 'CanAllocate' : 'Normal'), (B += '1'), c.clusterJewelSize)) {
                                                        default:
                                                        case 0:
                                                            B += 'Small';
                                                            break;
                                                        case 1:
                                                            B += 'Medium';
                                                            break;
                                                        case 2:
                                                            B += 'Large';
                                                    }
                                                    var F = h.assets.get('frame', B, n);
                                                    if (F) {
                                                        M = (R = F.width * r) / 2;
                                                        (R = Math.round(R)), i.drawImage(F, F.coords.x, F.coords.y, F.width, F.height, Math.round(w.x - M), Math.round(w.y - M), R, R);
                                                    }
                                                }
                                                if (c.isJewel && c.skill.isJewel()) {
                                                    var $ = c.skill.jewel,
                                                        L = (function (t, e) {
                                                            var i = 'JewelSocketActive';
                                                            if (0 == e.type.indexOf('JewelAbyss')) i += 'Abyss';
                                                            else if ('JewelTimeless' == e.type) i += 'Legion';
                                                            else if ('JewelInt' == e.type) i += 'Blue';
                                                            else if ('JewelDex' == e.type) i += 'Green';
                                                            else if ('JewelPrismatic' == e.type) i += 'Prismatic';
                                                            else {
                                                                if ('JewelStr' != e.type) return 'JewelPassiveTreeExpansionSmall' == e.type ? i + 'AltRed' : 'JewelPassiveTreeExpansionMedium' == e.type ? i + 'AltBlue' : 'JewelPassiveTreeExpansionLarge' == e.type ? i + 'AltPurple' : null;
                                                                i += 'Red';
                                                            }
                                                            return t.isClusterJewel && (i += 'Alt'), i;
                                                        })(c, $);
                                                    if (L) {
                                                        var z = h.assets.get('jewel', L, n);
                                                        if (z) {
                                                            var R;
                                                            M = (R = z.width * r) / 2;
                                                            (R = Math.round(R)), i.drawImage(z, z.coords.x, z.coords.y, z.width, z.height, Math.round(w.x - M), Math.round(w.y - M), R, R);
                                                        }
                                                        if ($.radius) {
                                                            var _ = 2 * $.radius * n,
                                                                j = $.radiusMin ? 1.075 * $.radiusMin * 2 * n : null;
                                                            if (_) {
                                                                var U = { x: Math.round(w.x), y: Math.round(w.y), visual: $.radiusVisual, width: _, innerWidth: j };
                                                                h.jewelCircles[c.skill.hash] = U;
                                                            }
                                                        }
                                                    }
                                                }
                                                if (null === c.clickable) {
                                                    var J = h.getNodeRadius(c),
                                                        V = new u(y, J);
                                                    (c.clickable = V),
                                                        (V.onclick = function (t) {
                                                            if (nodeClickCallback) {
                                                                nodeClickCallback(c.id);
                                                            }
                                                            (h.drawState.dirty = !0), (h.drawState.dirtyFullRedraw = !0);
                                                            var i = !1;
                                                            if (c.active) h.passiveAllocation.unallocate(c.skill.getHash()) && ((i = !0), c.isMastery() && c.popup && c.popup.render());
                                                            else if (c.isMastery() && c.similarNodeHighlighter && h.atlas)
                                                                c.similarNodeHighlighter.foreachHighlighter(function (t) {
                                                                    t.atlasMasteryOverlay = !t.atlasMasteryOverlay;
                                                                });
                                                            else if (c.isMastery() && h.passiveAllocation.canAllocate(c))
                                                                if ((c.popup && !c.popup.editable && (c.popup.destroy(), (c.popup = null)), c.popup)) c.popup.handleMouseout(t), c.popup.destroy(), (c.popup = null), (c.popup = new p(c.masteryData, h.passiveAllocation, !1)), c.popup.handleMouseover(t);
                                                                else {
                                                                    c.popup = new p(c.masteryData, h.passiveAllocation, !0);
                                                                    var a = h.worldToScreen(new s(V.point.x - V.radius, V.point.y));
                                                                    (t.x = a.x),
                                                                        (t.y = a.y),
                                                                        c.popup.handleMouseClick(t),
                                                                        e(c.popup).on('allocateMastery', function (t, e, i) {
                                                                            h.passiveAllocation.allocate(e, i), c.popup.handleMouseout(), c.popup.destroy(), (c.popup = null), (h.drawState.dirty = !0), (h.drawState.dirtyFullRedraw = !0);
                                                                        });
                                                                }
                                                            else h.passiveAllocation.allocate(c.skill.getHash()) && (i = !0);
                                                            if (i && h.settings.highlightShortestPaths && null !== c.pathHighlighterGroup) {
                                                                c.pathHighlighterGroup.end();
                                                                var n = h.getShortestPathsFromActiveNodes(c);
                                                                (c.pathHighlighterGroup = new f(h, n)), c.pathHighlighterGroup.begin();
                                                            }
                                                        }),
                                                        (V.onmousemove = function (t) {
                                                            if (((h.drawState.dirty = !0), (c.renderState.hover = !0), c.skill.isJewel() ? c.skill.item.handleItemMouseover(t) : c.popup ? c.popup.editable || c.popup.handleMouseover(t) : c.isMastery() ? (h.atlas && c.skill ? ((c.popup = new p(new g({ name: c.skill.displayName, skill: c.skill.hash, atlas: !0 }), h.passiveAllocation, !1)), c.popup.handleMouseover(t)) : c.masteryData && ((c.popup = new p(c.masteryData, h.passiveAllocation, !1)), c.popup.handleMouseover(t))) : c.skill && ((c.popup = new v(c.skill)), c.popup.handleMouseover(t), h.settings.highlightSimilarNodes && h.highlightSimilarNodes(c)), h.settings.highlightShortestPaths && null === c.pathHighlighterGroup)) {
                                                                var e = h.getShortestPathsFromActiveNodes(c);
                                                                (c.pathHighlighterGroup = new f(h, e)), c.pathHighlighterGroup.begin();
                                                            }
                                                            c.isMastery() && null === c.similarNodeHighlighter && h.highlightSimilarMasteries(c);
                                                        }),
                                                        (V.onmouseout = function (t) {
                                                            (h.drawState.dirty = !0),
                                                                (c.renderState.hover = !1),
                                                                c.skill.isJewel() ? c.skill.item.handleItemMouseout() : c.popup && !c.popup.editable && (c.popup.handleMouseout(), c.popup.destroy(), (c.popup = null)),
                                                                null !== c.similarNodeHighlighter &&
                                                                    c.similarNodeHighlighter.end().done(
                                                                        (function (t, e) {
                                                                            return function () {
                                                                                t.similarNodeHighlighter === e && (t.similarNodeHighlighter = null);
                                                                            };
                                                                        })(c, c.similarNodeHighlighter)
                                                                    ),
                                                                null !== c.pathHighlighterGroup && (c.pathHighlighterGroup.end(), (c.pathHighlighterGroup = null));
                                                        });
                                                }
                                            }
                                    }
                                });
                            },
                        },
                        {
                            key: 'drawNode',
                            value: function (t, e) {
                                e(t, this.getNodePositionInfo(t));
                            },
                        },
                        {
                            key: 'drawPathBetweenNodes',
                            value: function (t, e, i, s) {
                                if (!t.isMastery() && !e.isMastery()) {
                                    var a = this.getNodePositionInfo(t),
                                        n = this.getNodePositionInfo(e);
                                    if (t.group.id != e.group.id || t.orbit != e.orbit) i(a, n);
                                    else {
                                        var r = t.group.position.clone(),
                                            o = a.angle,
                                            l = n.angle,
                                            h = o < l;
                                        o = h ? a.angle : n.angle;
                                        var c = (l = h ? n.angle : a.angle) - o;
                                        if (c > Math.PI) l = (o = l) + (2 * Math.PI - c);
                                        s(r, o, l, this.orbitRadii[t.orbit]);
                                    }
                                }
                            },
                        },
                        {
                            key: 'drawLoading',
                            value: function (t) {
                                var e = C.translate('Loading') + '... ' + Math.round(100 * t) + '%',
                                    i = this.canvas.width / 2,
                                    s = this.canvas.height / 2,
                                    a = this.ctx.measureText(e);
                                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), (this.ctx.fillStyle = 'rgb(251,243,241)'), (this.ctx.font = '20pt FontinBold'), this.ctx.fillText(e, Math.round(i - a.width / 2), Math.round(s - 10));
                            },
                        },
                        {
                            key: 'draw',
                            value: function () {
                                var t = this;
                                (this.drawState.active = !0),
                                    this.calcTileGrid(),
                                    (this.drawState.dirty || this.drawState.dirtyFullRedraw || !this.lastDrawBounds || this.lastDrawBounds.neq(this.viewPort.bounds)) &&
                                        ((this.lastDrawBounds = this.viewPort.bounds.clone()),
                                        this.foreachVisibleGridTile(function (e, i, s, a, n) {
                                            t.drawTilePos(i, s), t.ctx.drawImage(e.canvas, 0, 0, t.tileSize, t.tileSize, Math.round(a * t.tileSize - t.grid.visGridXviewPortShift), Math.round(n * t.tileSize - t.grid.visGridYviewPortShift), t.tileSize, t.tileSize);
                                        })),
                                    this.drawMidCanvas(),
                                    this.drawTopCanvas();
                                for (var e = 0, i = this.finalDrawFuncs.length; e < i; ++e) this.finalDrawFuncs[e]();
                                (this.finalDrawFuncs = []), null !== this.errorMessage && ((this.ctx.fillStyle = 'rgb(251,30,30)'), (this.ctx.font = '10pt FontinBold'), this.ctx.fillText(this.errorMessage, 10, this.canvas.height - 20)), (this.drawState.dirty = !1), (this.drawState.dirtyFullRedraw = !1), (this.drawState.active = !1);
                            },
                        },
                        {
                            key: 'drawImageTiled',
                            value: function (t, e, i, s, a, n, r, o) {
                                for (var l = t.width * i, h = t.height * s, c = r - a, d = o - n, u = 0, f = Math.ceil(c / l); u < f; ++u)
                                    for (var v = u * l + a, p = 0, g = Math.ceil(d / h); p < g; ++p) {
                                        e.save(), e.translate(v, p * h + n);
                                        var y,
                                            w = t.width,
                                            k = l,
                                            m = t.height,
                                            P = h;
                                        if (u == f - 1) 0 !== (y = c % l) && ((k -= l - y), (w *= y / l));
                                        if (p == g - 1) 0 !== (y = Math.round(d) % Math.round(h)) && ((P -= h - y), (m *= y / h));
                                        e.drawImage(t, img.coords.x, img.coords.y, w, m, 0, 0, k, P), e.restore();
                                    }
                            },
                        },
                        {
                            key: 'drawTopCanvas',
                            value: function () {
                                var t = this;
                                this.debug && (this.drawState.topDirty = !0),
                                    this.drawState.topDirty &&
                                        (this.topCtx.clearRect(0, 0, this.topCanvas.width, this.topCanvas.height),
                                        this.debug &&
                                            (this.foreachVisibleGridTile(function (e, i, s, a, n) {
                                                t.topCtx.save(), (t.topCtx.strokeStyle = 'rgb(20,200,200)'), t.topCtx.strokeRect(a * t.tileSize - t.grid.visGridXviewPortShift, n * t.tileSize - t.grid.visGridYviewPortShift, t.tileSize, t.tileSize), t.topCtx.restore();
                                            }),
                                            this.foreachClickable(function (e) {
                                                var i = t.worldToScreen(e.point);
                                                t.topCtx.save(), (t.topCtx.strokeStyle = 'rgb(20,200,200)'), t.topCtx.beginPath(), t.topCtx.arc(i.x, i.y, e.radius * t.viewPort.zoom, 0, 2 * Math.PI), t.topCtx.stroke(), t.topCtx.restore();
                                            }),
                                            this.drawDebug(),
                                            this.drawDebugGridInfo()),
                                        (this.drawState.topDirty = !1));
                            },
                        },
                        {
                            key: 'drawMidCanvas',
                            value: function () {
                                this.midCtx.clearRect(0, 0, this.midCanvas.width, this.midCanvas.height),
                                    this.midDrawObjects.foreachObject(function (t) {
                                        t.draw();
                                    });
                            },
                        },
                        {
                            key: 'getNodeRadius',
                            value: function (t) {
                                return t.notable ? 70 : t.isKeystone() ? 109 : t.isMastery() ? 90 : t.isJewel ? 70 : t.isClassStartNode() ? 200 : t.isAscendancyStartNode ? 40 : 51;
                            },
                        },
                        {
                            key: 'getScreenWorldPosition',
                            value: function (t, e) {
                                return new s(this.viewPort.bounds.tl.x + t / this.viewPort.zoom, this.viewPort.bounds.tl.y + e / this.viewPort.zoom);
                            },
                        },
                        {
                            key: 'worldToScreen',
                            value: function (t) {
                                return new s((t.x - this.viewPort.bounds.tl.x) * this.viewPort.zoom, (t.y - this.viewPort.bounds.tl.y) * this.viewPort.zoom);
                            },
                        },
                        {
                            key: 'getTileWorldPosition',
                            value: function (t, e) {
                                var i = new s();
                                return (i.x = (t * this.tileSize) / this.viewPort.zoom + this.extent.tl.x), (i.y = (e * this.tileSize) / this.viewPort.zoom + this.extent.tl.y), i;
                            },
                        },
                        {
                            key: 'drawTilePos',
                            value: function (t, e) {
                                var i = this.getTileWorldPosition(t, e);
                                return this.drawTile(this.grid.tiles[e][t], i, this.viewPort.zoom);
                            },
                        },
                        {
                            key: 'getAscendancyPositionInfo',
                            value: function (t) {
                                var e = this.getNodePositionInfo(this.startNode).position,
                                    a = 270,
                                    n = 0,
                                    r = 1,
                                    o = Math.sqrt(e.x * e.x + e.y * e.y),
                                    l = Math.abs(e.x) < 10 && Math.abs(e.y) < 10;
                                l || ((n = e.x / o), (r = -e.y / o));
                                var h = this.viewPort.zoom,
                                    c = Math.atan2(n, r),
                                    d = e.x + a * Math.cos(c + Math.PI / 2),
                                    u = e.y + a * Math.sin(c + Math.PI / 2),
                                    f = new s(d, u),
                                    v = this.assets.get('ascendancyBackground', 'Classes' + this.ascendancyClassName, h),
                                    p = e.x + (a + v.height / h / 2) * Math.cos(c + Math.PI / 2),
                                    g = e.y + (a + v.height / h / 2) * Math.sin(c + Math.PI / 2),
                                    y = new s(p, g),
                                    w = (new s(y.x - v.width / h / 2, y.y - v.height / h / 2), new s(y.x + v.width / h / 2, y.y + v.height / h / 2), new i());
                                (w.tl = new s(y.x - v.width / h / 2, y.y - v.height / h / 2)), (w.br = new s(y.x + v.width / h / 2, y.y + v.height / h / 2)), t && (e.inverseTranslate(t.tl), f.inverseTranslate(t.tl), y.inverseTranslate(t.tl));
                                var k = { distanceFromStartNodeCenter: a, distToCenter: o, dirX: n, dirY: r, isCentered: l, worldPos: e, ascButtonRot: c, buttonPoint: f, classArtImg: v, classArtImgPoint: y, classArtImgBounds: w };
                                if (this.ascendancyStartNode) {
                                    var m = this.getNodePositionInfo(this.ascendancyStartNode).position,
                                        P = p - m.x,
                                        S = g - m.y;
                                    (k.startNodeDX = P), (k.startNodeDY = S);
                                }
                                return k;
                            },
                        },
                        {
                            key: 'drawStartNodeAscendancyButton',
                            value: function (t, e) {
                                var i = this;
                                if (this.ascendancyClassName) {
                                    var s = this.viewPort.zoom,
                                        a = this.assets.get('ascendancy', this.ascendancyButton.state, s),
                                        n = a.height / s / 2,
                                        r = this.getAscendancyPositionInfo(e);
                                    r.buttonPoint.clone().scale(s);
                                    var o = r.worldPos;
                                    o.scale(s), t.save(), t.translate(o.x, o.y), t.rotate(r.ascButtonRot), t.drawImage(a, a.coords.x, a.coords.y, a.width, a.height, -a.width / 2, (r.distanceFromStartNodeCenter - n) * s, a.width, a.height), t.restore();
                                    var l = this.getAscendancyPositionInfo();
                                    (this.ascendancyButton.clickable = new u(l.buttonPoint, a.height / s / 2)),
                                        (this.ascendancyButton.clickable.onmousemove = function () {
                                            'AscendancyButtonHighlight' != i.ascendancyButton.state && ((i.ascendancyButton.state = 'AscendancyButtonHighlight'), (i.drawState.dirty = !0), (i.drawState.dirtyFullRedraw = !0));
                                        }),
                                        (this.ascendancyButton.clickable.onmouseout = function () {
                                            (i.ascendancyButton.state = 'AscendancyButton'), (i.drawState.dirty = !0), (i.drawState.dirtyFullRedraw = !0);
                                        }),
                                        (this.ascendancyButton.clickable.onclick = function (t) {
                                            (i.ascendancyButton.state = 'AscendancyButtonPressed'), (i.ascendancyClassPopupHidden = !i.ascendancyClassPopupHidden), (i.drawState.dirty = !0), (i.drawState.dirtyFullRedraw = !0), i.lastQuery && '' != i.lastQuery && i.highlightSearchQuery(i.lastQuery), (i.drawState.topDirty = !0);
                                        });
                                }
                            },
                        },
                        {
                            key: 'isAscendancyGroupEnabled',
                            value: function (t) {
                                return t && t.isAscendancy && t.ascendancyName && t.ascendancyName === this.ascendancyClassName && !this.ascendancyClassPopupHidden;
                            },
                        },
                        {
                            key: 'drawAscendancyClassBackground',
                            value: function (t, e) {
                                if (this.ascendancyClassPopupHidden || !this.ascendancyClassName) return !1;
                                var i = this.getAscendancyPositionInfo(e),
                                    s = i.classArtImgPoint;
                                s.scale(this.viewPort.zoom);
                                var a = i.classArtImg;
                                a && (t.save(), t.translate(s.x, s.y), t.beginPath(), t.arc(0, 0, a.width / 2, 0, 2 * Math.PI), t.clip(), t.drawImage(a, a.coords.x, a.coords.y, a.width, a.height, -a.width / 2, -a.height / 2, a.width, a.height), t.restore());
                            },
                        },
                        {
                            key: 'drawAscendancyClassText',
                            value: function (t, e) {
                                if (this.ascendancyClassPopupHidden || !this.ascendancyClassName) return !1;
                                var i = this.getAscendancyPositionInfo(e),
                                    a = i.classArtImg,
                                    n = i.classArtImgPoint;
                                n.scale(this.viewPort.zoom), t.save(), t.translate(n.x - a.width / 2, n.y - a.height / 2);
                                var r = this.ascendancyClasses[this.characterClass].ascendancies[this.ascendancyClass - 1];
                                if (r.flavourTextRect) {
                                    var o = 0,
                                        l = 48 * this.viewPort.zoom;
                                    t.font = Math.round(l) + 'px FontinItalic';
                                    var h = r.flavourTextRect,
                                        c = new s(h.x, h.y);
                                    c.scale(this.viewPort.zoom);
                                    var d = r.flavourText.split('\n');
                                    for (var u in d) (o += Math.round(l + 4 * this.viewPort.zoom)), (t.fillStyle = 'black'), t.strokeText(d[u], c.x, c.y + o), (t.fillStyle = '#'.concat(r.flavourTextColour)), t.fillText(d[u], c.x, c.y + o);
                                }
                                t.restore();
                            },
                        },
                        {
                            key: 'drawStartNodeBackground',
                            value: function (t, e, i, s, a) {
                                var n = a == this.characterClass,
                                    r = 'PSStartNodeBackgroundInactive';
                                if (n)
                                    switch (a) {
                                        case this.constants.classes.StrClass:
                                            r = 'centermarauder';
                                            break;
                                        case this.constants.classes.DexClass:
                                            r = 'centerranger';
                                            break;
                                        case this.constants.classes.IntClass:
                                            r = 'centerwitch';
                                            break;
                                        case this.constants.classes.StrDexClass:
                                            r = 'centerduelist';
                                            break;
                                        case this.constants.classes.StrIntClass:
                                            r = 'centertemplar';
                                            break;
                                        case this.constants.classes.DexIntClass:
                                            r = 'centershadow';
                                            break;
                                        case this.constants.classes.StrDexIntClass:
                                            r = 'centerscion';
                                    }
                                var o = this.assets.get('startNode', r, i);
                                if (o) {
                                    var l = o.width * s,
                                        h = o.height * s,
                                        c = l / 2,
                                        d = h / 2;
                                    t.drawImage(o, o.coords.x, o.coords.y, o.width, o.height, Math.round(e.x - c), Math.round(e.y - d), Math.round(l), Math.round(h));
                                }
                                if (n) {
                                    var u = Math.ceil(25 * this.viewPort.zoom);
                                    t.font = u + 'pt FontinRegular';
                                    var f = (Math.PI / 180) * 300,
                                        v = e.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(f),
                                        p = e.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(f);
                                    t.fillStyle = 'rgb(235,46,16)';
                                    var g = t.measureText(this.stats.getAttribute(this.constants.characterAttributes.Strength));
                                    t.fillText(this.stats.getAttribute(this.constants.characterAttributes.Strength), v - g.width / 2, p + u / 2);
                                    (f = (Math.PI / 180) * 60), (v = e.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(f)), (p = e.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(f));
                                    t.beginPath(), (t.fillStyle = 'rgb(1,217,1)');
                                    g = t.measureText(this.stats.getAttribute(this.constants.characterAttributes.Dexterity));
                                    t.fillText(this.stats.getAttribute(this.constants.characterAttributes.Dexterity), v - g.width / 2, p + u / 2);
                                    (f = (Math.PI / 180) * 180), (v = e.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(f)), (p = e.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(f));
                                    t.beginPath(), (t.fillStyle = 'rgb(88,130,255)');
                                    g = t.measureText(this.stats.getAttribute(this.constants.characterAttributes.Intelligence));
                                    t.fillText(this.stats.getAttribute(this.constants.characterAttributes.Intelligence), v - g.width / 2, p + u / 2);
                                }
                            },
                        },
                        {
                            key: 'drawGroupBackground',
                            value: function (t, e, i, s, a, n) {
                                if (e.background && e.background.image) {
                                    var r = this.assets.get('groupBackground', e.background.image, a);
                                    if (r) {
                                        var o = (e.background.offsetX || 0) * s,
                                            l = (e.background.offsetY || 0) * s;
                                        if (e.background.isHalfImage) {
                                            var h = r.width * n,
                                                c = h / 2;
                                            t.drawImage(r, r.coords.x, r.coords.y, r.width, r.height, Math.round(i.x - c), Math.round(i.y - c), Math.round(h), Math.round(c)), t.save(), t.translate(Math.round(i.x), Math.round(i.y)), t.rotate(Math.PI), (c = Math.round(c)), t.translate(0, -c), t.drawImage(r, r.coords.x, r.coords.y, r.width, r.height, -c, 0, h, c), t.restore();
                                        } else {
                                            var d = Math.round(r.width * n),
                                                u = Math.round(r.height * n),
                                                f = Math.round(i.x - d / 2 + o),
                                                v = Math.round(i.y - u / 2 + l);
                                            t.drawImage(r, r.coords.x, r.coords.y, r.width, r.height, f, v, d, u);
                                        }
                                        if (e.nodes)
                                            for (var p in e.nodes)
                                                if (Object.hasOwnProperty.call(e.nodes, p)) {
                                                    var g = e.nodes[p];
                                                    if (g.active && g.isMastery() && g.masteryData) {
                                                        var y = this.assets.get('masteryActiveEffect', g.masteryData.activeEffectImage, a);
                                                        if (y) {
                                                            var w = y.width * n,
                                                                k = w / 2;
                                                            (w = Math.round(w)), t.drawImage(y, y.coords.x, y.coords.y, y.width, y.height, Math.round(i.x - k), Math.round(i.y - k), w, w);
                                                        }
                                                    }
                                                }
                                    }
                                }
                            },
                        },
                        {
                            key: 'drawBackgroundTile',
                            value: function (t, e, i, s) {
                                var a = this.assets.get('background', 'Background2', i);
                                if (a) for (var n = e.x - this.extent.tl.x, r = e.y - this.extent.tl.y, o = a.width * s, l = a.height * s, h = n % o, c = r % l, d = 0, u = Math.ceil((this.tileSize + h) / o); d < u; ++d) for (var f = 0, v = Math.ceil((this.tileSize + c) / l); f < v; ++f) t.drawImage(a, a.coords.x, a.coords.y, a.width, a.height, Math.round(d * o - h), Math.round(f * l - c), Math.round(o), Math.round(l));
                            },
                        },
                        {
                            key: 'drawGroupNodePaths',
                            value: function (t, e, i, s) {
                                var a = this;
                                if (s.contains(t.position)) {
                                    var n = this.viewPort.zoom,
                                        r = this.getCurrentImageZoomLevel(),
                                        o = n / r;
                                    t.foreachNode(function (s) {
                                        var l = a.getNodePositionInfo(s, t).position,
                                            h = a.getNode('root');
                                        l.inverseTranslate(i.tl),
                                            l.scale(n),
                                            void 0 === s.classStartIndex &&
                                                s.foreachOutNode(function (t) {
                                                    var l = a.getNodePositionInfo(t).position;
                                                    l.inverseTranslate(i.tl),
                                                        l.scale(n),
                                                        (s.isAscendancy && !t.isAscendancy) ||
                                                            t.isClassStartNode() ||
                                                            t.isAscendancyStartNode ||
                                                            t.isBlightedNode ||
                                                            a.drawPathBetweenNodes(
                                                                s,
                                                                t,
                                                                function (l, c) {
                                                                    var d = l.position,
                                                                        u = c.position;
                                                                    d.inverseTranslate(i.tl), d.scale(n), u.inverseTranslate(i.tl), u.scale(n);
                                                                    var f = 'Normal',
                                                                        v = a.assets.get('line', 'LineConnector' + f, r),
                                                                        p = a.assets.get('line', 'PSLineDeco' + (s.active || t.active ? 'Highlighted' : ''), r);
                                                                    if (((s.active && t.active) || (a.atlas && N.has(h.outNodes, s.id) && t.active) ? (f = 'Active') : (s.active || t.active) && (f = 'Intermediate'), a.atlas && 'Normal' != f && a.drawStraightPath(e, v, d, u, o), (v = a.assets.get('line', 'LineConnector' + f, r)), a.drawStraightPath(e, v, d, u, o), p)) {
                                                                        var g = d.angleTo(u),
                                                                            y = Math.round(p.height / 2),
                                                                            w = Math.round((s.isAscendancy ? (s.isAscendancyStartNode ? 12 : s.notable ? 47 : 22) : s.keystone ? 86 : s.notable ? 50 : 25) * n),
                                                                            k = Math.round((s.isAscendancy ? (t.isAscendancyStartNode ? 12 : t.notable ? 47 : 22) : t.keystone ? 86 : t.notable ? 50 : 25) * n);
                                                                        e.save(), e.translate(Math.round(d.x), Math.round(d.y)), e.scale(o, o), e.rotate(g), e.drawImage(p, p.coords.x, p.coords.y, p.width, p.height, w, -y, p.width, p.height), e.restore(), e.save(), e.translate(Math.round(u.x), Math.round(u.y)), e.scale(o, o), e.rotate(g + Math.PI), e.drawImage(p, p.coords.x, p.coords.y, p.width, p.height, k, -y, p.width, p.height), e.restore();
                                                                    }
                                                                },
                                                                function (l, h, c, d) {
                                                                    l.inverseTranslate(i.tl), l.scale(n);
                                                                    var u = 'Normal',
                                                                        f = null;
                                                                    s.active && t.active ? (u = 'Active') : (s.active || t.active) && (u = 'Intermediate'), a.atlas && 'Normal' != u && ((f = a.assets.get('line', 'Orbit' + t.orbit + 'Normal', r)), a.drawArc(e, f, l, h - Math.PI / 2, c - Math.PI / 2, 'Normal', o)), (f = a.assets.get('line', 'Orbit' + t.orbit + u, r)), a.drawArc(e, f, l, h - Math.PI / 2, c - Math.PI / 2, u, o);
                                                                }
                                                            );
                                                });
                                    });
                                }
                            },
                        },
                        {
                            key: 'drawImageCentered',
                            value: function (t, e, i, s, a) {
                                var n = e.width * a,
                                    r = n / 2,
                                    o = e.height * a,
                                    l = o / 2;
                                t.drawImage(e, e.coords.x, e.coords.y, e.width, e.height, Math.round(i.x - r), Math.round(i.y - l), Math.round(n), Math.round(o));
                            },
                        },
                        {
                            key: 'foreachGroup',
                            value: function (t) {
                                for (var e in this.groups) t.call(this, this.groups[e]);
                            },
                        },
                        {
                            key: 'foreachNode',
                            value: function (t) {
                                for (var e in this.nodes) if (!0 === t.call(this, this.nodes[e])) return;
                            },
                        },
                        {
                            key: 'foreachClickable',
                            value: function (t) {
                                var e = this,
                                    i = !this.ascendancyClassPopupHidden && this.getAscendancyPositionInfo();
                                this.foreachNode(function (s) {
                                    if (null === s.clickable) return !1;
                                    if (i && !s.isAscendancy) {
                                        if (s.isAscendancyStartNode) return !1;
                                        if (i.classArtImgBounds.contains(s.clickable.point)) return !1;
                                    }
                                    if (s.isAscendancy && !e.isAscendancyGroupEnabled(s.group)) return !1;
                                    t.call(e, s.clickable);
                                }),
                                    !this.ascendancyButton || !this.ascendancyButton.clickable || t.call(this, this.ascendancyButton.clickable);
                            },
                        },
                        {
                            key: 'findNodes',
                            value: function (t) {
                                var e = [];
                                for (var i in this.nodes) {
                                    var s = this.nodes[i];
                                    t.call(this, s) && e.push(s);
                                }
                                return e;
                            },
                        },
                        {
                            key: 'getNode',
                            value: function (t) {
                                return this.nodes[t];
                            },
                        },
                        {
                            key: 'getGroup',
                            value: function (t) {
                                return this.groups[t];
                            },
                        },
                        {
                            key: 'addNode',
                            value: function (t, e) {
                                this.nodes[t] = e;
                            },
                        },
                        {
                            key: 'addGroup',
                            value: function (t) {
                                this.groups[t.getId()] = t;
                            },
                        },
                        {
                            key: 'getOrbitSkillCount',
                            value: function (t) {
                                return this.skillsPerOrbit[t];
                            },
                        },
                        {
                            key: 'getOrbitAngle',
                            value: function (t, e) {
                                var i = 0.017453293;
                                if (40 == e)
                                    switch (t) {
                                        case 0:
                                            return this.getOrbitAngle(0, 12);
                                        case 1:
                                            return this.getOrbitAngle(0, 12) + 10 * i;
                                        case 2:
                                            return this.getOrbitAngle(0, 12) + 20 * i;
                                        case 3:
                                            return this.getOrbitAngle(1, 12);
                                        case 4:
                                            return this.getOrbitAngle(1, 12) + 10 * i;
                                        case 5:
                                            return this.getOrbitAngle(1, 12) + 15 * i;
                                        case 6:
                                            return this.getOrbitAngle(1, 12) + 20 * i;
                                        case 7:
                                            return this.getOrbitAngle(2, 12);
                                        case 8:
                                            return this.getOrbitAngle(2, 12) + 10 * i;
                                        case 9:
                                            return this.getOrbitAngle(2, 12) + 20 * i;
                                        case 10:
                                            return this.getOrbitAngle(3, 12);
                                        case 11:
                                            return this.getOrbitAngle(3, 12) + 10 * i;
                                        case 12:
                                            return this.getOrbitAngle(3, 12) + 20 * i;
                                        case 13:
                                            return this.getOrbitAngle(4, 12);
                                        case 14:
                                            return this.getOrbitAngle(4, 12) + 10 * i;
                                        case 15:
                                            return this.getOrbitAngle(4, 12) + 15 * i;
                                        case 16:
                                            return this.getOrbitAngle(4, 12) + 20 * i;
                                        case 17:
                                            return this.getOrbitAngle(5, 12);
                                        case 18:
                                            return this.getOrbitAngle(5, 12) + 10 * i;
                                        case 19:
                                            return this.getOrbitAngle(5, 12) + 20 * i;
                                        case 20:
                                            return this.getOrbitAngle(6, 12);
                                        case 21:
                                            return this.getOrbitAngle(6, 12) + 10 * i;
                                        case 22:
                                            return this.getOrbitAngle(6, 12) + 20 * i;
                                        case 23:
                                            return this.getOrbitAngle(7, 12);
                                        case 24:
                                            return this.getOrbitAngle(7, 12) + 10 * i;
                                        case 25:
                                            return this.getOrbitAngle(7, 12) + 15 * i;
                                        case 26:
                                            return this.getOrbitAngle(7, 12) + 20 * i;
                                        case 27:
                                            return this.getOrbitAngle(8, 12);
                                        case 28:
                                            return this.getOrbitAngle(8, 12) + 10 * i;
                                        case 29:
                                            return this.getOrbitAngle(8, 12) + 20 * i;
                                        case 30:
                                            return this.getOrbitAngle(9, 12);
                                        case 31:
                                            return this.getOrbitAngle(9, 12) + 10 * i;
                                        case 32:
                                            return this.getOrbitAngle(9, 12) + 20 * i;
                                        case 33:
                                            return this.getOrbitAngle(10, 12);
                                        case 34:
                                            return this.getOrbitAngle(10, 12) + 10 * i;
                                        case 35:
                                            return this.getOrbitAngle(10, 12) + 15 * i;
                                        case 36:
                                            return this.getOrbitAngle(10, 12) + 20 * i;
                                        case 37:
                                            return this.getOrbitAngle(11, 12);
                                        case 38:
                                            return this.getOrbitAngle(11, 12) + 10 * i;
                                        case 39:
                                            return this.getOrbitAngle(11, 12) + 20 * i;
                                    }
                                else if (16 == e)
                                    switch (t) {
                                        case 0:
                                            return 0;
                                        case 1:
                                            return 30 * i;
                                        case 2:
                                            return 45 * i;
                                        case 3:
                                            return 60 * i;
                                        case 4:
                                            return 90 * i;
                                        case 5:
                                            return 120 * i;
                                        case 6:
                                            return 135 * i;
                                        case 7:
                                            return 150 * i;
                                        case 8:
                                            return 3.14159274;
                                        case 9:
                                            return 210 * i;
                                        case 10:
                                            return 225 * i;
                                        case 11:
                                            return 240 * i;
                                        case 12:
                                            return 4.71238911;
                                        case 13:
                                            return 300 * i;
                                        case 14:
                                            return 315 * i;
                                        case 15:
                                            return 330 * i;
                                    }
                                return (2 * Math.PI * t) / e;
                            },
                        },
                        {
                            key: 'getOrbitRadius',
                            value: function (t) {
                                return this.orbitRadii[t];
                            },
                        },
                        {
                            key: 'getNodePositionInfo',
                            value: function (t, e) {
                                var i = this.getOrbitRadius(t.orbit),
                                    s = this.getOrbitAngle(t.orbitIndex, this.getOrbitSkillCount(t.orbit)),
                                    a = e ? e.position.clone() : t.group.position.clone();
                                return (a.x -= i * Math.sin(-s)), (a.y -= i * Math.cos(-s)), { position: a, angle: s };
                            },
                        },
                        {
                            key: 'calculateFlipPosition',
                            value: function (t, e, i) {
                                var s = (e - t) / i,
                                    a = s % 1;
                                return 0 == parseInt(s) % 2 ? a : 1 - a;
                            },
                        },
                        {
                            key: 'calculateLerpPosition',
                            value: function (t, e, i) {
                                return (e - t) / i;
                            },
                        },
                        {
                            key: 'createDefaultHighlighterGroup',
                            value: function (t) {
                                var e = this;
                                return new P({
                                    highlighters: [
                                        new k(this, {
                                            nodes: t.filter(function (t) {
                                                return t.group && !(t.isMastery() && !t.masteryData) && (!t.isAscendancy || e.isAscendancyGroupEnabled(t.group));
                                            }),
                                        }),
                                    ],
                                });
                            },
                        },
                        {
                            key: 'createDefaultHighlighterMastery',
                            value: function (t) {
                                var e;
                                return new P({
                                    highlighters: [
                                        new k(this, {
                                            nodes: t.filter(function (t) {
                                                return t.isMastery();
                                            }),
                                            atlasMasteryOverlay: !1,
                                            animations: ((e = {}), _defineProperty(e, m.In, { speed: 500, fillColour: { start: new S(255, 255, 255, 0) }, strokeColour: { start: new S(255, 255, 255, 0.6), end: new S(255, 255, 255, 1) } }), _defineProperty(e, m.Default, { speed: 1e3, fillColour: { start: new S(255, 255, 255, 0), end: new S(255, 255, 255, 0) }, strokeColour: { start: new S(255, 255, 255, 1), end: new S(255, 255, 255, 0.2) } }), _defineProperty(e, m.Out, { speed: 0, fillColour: { start: null, end: new S() }, strokeColour: { start: null, end: new S(255, 255, 255, 0) } }), e),
                                        }),
                                    ],
                                });
                            },
                        },
                        {
                            key: 'highlightSearchQuery',
                            value: function (t) {
                                var e,
                                    i = this,
                                    s = !0,
                                    a = !0;
                                if (((this.lastQuery = t), ((('zh_TW' === window.PoELocale || 'zh_CN' === window.PoELocale) && t.length >= 1) || t.length > 2) && (a = !1), !a)) {
                                    t = t.toLowerCase();
                                    var n = !this.ascendancyClassPopupHidden && this.getAscendancyPositionInfo(),
                                        r = this.findNodes(function (e) {
                                            if (e.isMastery() && !e.masteryData) return !1;
                                            if (e.isAscendancy && !i.isAscendancyGroupEnabled(e.group)) return !1;
                                            if (!e.skill || !e.skill.displayName) return !1;
                                            if (n && !e.isAscendancy && !i.ascendancyClassPopupHidden && e.clickable && n.classArtImgBounds.contains(e.clickable.point)) return !1;
                                            if (-1 != e.skill.displayName.toLowerCase().indexOf(t)) return !0;
                                            if (e.isMastery() && e.masteryData) {
                                                if (!e.masteryData.masteryEffects) return !1;
                                                for (var s = 0, a = e.masteryData.masteryEffects.length; s < a; ++s) {
                                                    var r = e.masteryData.masteryEffects[s];
                                                    for (var o in r.stats) if (-1 != r.stats[o].toLowerCase().indexOf(t)) return !0;
                                                }
                                            } else {
                                                if (!e.skill.skillDescription) return !1;
                                                for (s = 0, a = e.skill.skillDescription.length; s < a; ++s) if (-1 != e.skill.skillDescription[s].toLowerCase().indexOf(t)) return !0;
                                            }
                                            return !1;
                                        });
                                    (e = this.createDefaultHighlighterGroup(r)), null !== this.searchHighlighter && e.copyStateFrom(this.searchHighlighter);
                                }
                                null !== this.searchHighlighter && (this.searchHighlighter.endImmediately(), (this.searchHighlighter = null), (s = !1)), a || ((this.searchHighlighter = e), s ? this.searchHighlighter.begin() : this.searchHighlighter.beginDefault(e.start));
                            },
                        },
                        {
                            key: 'highlightSimilarNodes',
                            value: function (t) {
                                var e = this;
                                if (null === t.similarNodeHighlighter) {
                                    var i = this.findNodes(function (i) {
                                            var s = !e.ascendancyClassPopupHidden && e.getAscendancyPositionInfo();
                                            return !(s && !i.isAscendancy && !e.ascendancyClassPopupHidden && i.clickable && s.classArtImgBounds.contains(i.clickable.point)) && t.skill.displayName == i.skill.displayName && (e.isAscendancyGroupEnabled(i.group) || !i.isAscendancy);
                                        }),
                                        s = this.createDefaultHighlighterGroup(i);
                                    (t.similarNodeHighlighter = s), s.begin();
                                }
                            },
                        },
                        {
                            key: 'highlightSimilarMasteries',
                            value: function (t) {
                                if (null === t.similarNodeHighlighter) {
                                    var e = this.findNodes(function (e) {
                                            return t.isMastery() && t.skill.displayName == e.skill.displayName;
                                        }),
                                        i = this.createDefaultHighlighterMastery(e);
                                    (t.similarNodeHighlighter = i), i.begin();
                                }
                            },
                        },
                        {
                            key: 'visitNodes',
                            value: function (t, e, i, s) {
                                var a = this.atlas,
                                    n = [];
                                for (n.push(t), this.ascendancyClassName && n.push(this.ascendancyStartNode); n.length > 0; ) {
                                    var r = n.pop(),
                                        o = r.skill.getHash();
                                    void 0 === i[o] &&
                                        ((a && o == t.id) || s(r, a)) &&
                                        (e.push(r),
                                        (i[o] = !0),
                                        r.foreachNeighbourNode(function (t) {
                                            var e = t.skill.getHash();
                                            void 0 === i[e] && s(t) && n.push(t);
                                        }));
                                }
                            },
                        },
                        {
                            key: 'visitBFS',
                            value: function (t, e, i, s) {
                                var a = [],
                                    n = {},
                                    r = {};
                                a.push(t), (n[t.skill.getHash()] = !0);
                                var o = function (t, e) {
                                        void 0 === r[e.skill.getHash()] && (r[e.skill.getHash()] = new y(e, t));
                                    },
                                    l = function (t) {
                                        return r[t.skill.getHash()];
                                    };
                                for (o(0, t); a.length > 0; ) {
                                    var h = a.shift(),
                                        c = (h.skill.getHash(), r[h.skill.getHash()]);
                                    if (e(h)) return void s(c, r);
                                    h.foreachNeighbourNode(function (t) {
                                        if (null !== t.skill.getHash() && i(t)) {
                                            if ((o(c.depth + 1, t), void 0 === n[t.skill.getHash()])) r[t.skill.getHash()].parents.push(h);
                                            else l(t).depth - 1 == c.depth && r[t.skill.getHash()].parents.push(h);
                                            void 0 === n[t.skill.getHash()] && ((n[t.skill.getHash()] = !0), a.push(t));
                                        }
                                    });
                                }
                            },
                        },
                        {
                            key: 'getHistoryUrl',
                            value: function () {
                                if (!this.isHistorySupported()) return '';
                                if (this.buildUrl) return '/build/' + this.buildUrl;
                                var t = [];
                                for (var e in this.passiveAllocation.allocatedSkills) t.push(e);
                                var i = [];
                                for (var e in this.passiveAllocation.allocatedExpansionSkills) i.push(e);
                                var s = [];
                                for (var e in this.passiveAllocation.allocatedEffects) s.push(parseInt(e) + (this.passiveAllocation.allocatedEffects[e] << 16));
                                var a = '';
                                return this.accountName && this.characterName && (a += '?accountName=' + this.accountName + (this.realm ? '&realm=' + this.realm : '') + '&characterName=' + this.characterName), b(this.fullScreen, { characterClass: this.characterClass, ascendancyClass: this.ascendancyClassName ? this.ascendancyClass : 0, hashes: t, hashesEx: i, masteryEffects: s, version: this.version, realm: this.realm, atlas: this.atlas }) + a;
                            },
                        },
                        {
                            key: 'loadHistoryUrl',
                            value: function (e) {
                                var i = this;
                                e = decodeURIComponent(e.replace(/-/g, '+').replace(/_/g, '/'));
                                try {
                                    e = Base64.atob(e);
                                } catch (t) {
                                    this.errorMessage = 'Failed to load build from URL. Please make sure it was copied correctly.';
                                    return void this.events.pointsChanged.add(function t() {
                                        i.events.pointsChanged.remove(t), (i.errorMessage = null);
                                    });
                                }
                                var s,
                                    a,
                                    n = new w();
                                n.setDataString(e);
                                var r = 0,
                                    o = [],
                                    l = [],
                                    h = {};
                                switch (n.readInt()) {
                                    case 4:
                                        for (s = n.readInt8(), a = n.readInt8(), r = n.readInt8(); n.hasData(); ) o.push(n.readInt16());
                                        break;
                                    case 5:
                                        (s = n.readInt8()), (a = n.readInt8());
                                        for (var c = n.readInt8(), d = 0; d < c; ++d) o.push(n.readInt16());
                                        var u = n.readInt8();
                                        for (d = 0; d < u; ++d) l.push(n.readInt16());
                                        break;
                                    case t.CurrentVersion:
                                        (s = n.readInt8()), (a = n.readInt8());
                                        for (c = n.readInt8(), d = 0; d < c; ++d) o.push(n.readInt16());
                                        for (u = n.readInt8(), d = 0; d < u; ++d) l.push(n.readInt16());
                                        var f = n.readInt8();
                                        for (d = 0; d < f; ++d) {
                                            var v = n.readInt();
                                            h[65535 & v] = v >>> 16;
                                        }
                                        break;
                                    default:
                                        return null;
                                }
                                this.characterData && this.loadCharacterData(s, a, o, l, h), this.atlas && (this.passiveAllocation.loadHashArray(o, l, h), this.events.historyUrlSet(this.getHistoryUrl()), this.fullRedraw()), 1 != r || this.fullScreen || this.toggleFullScreen(!0);
                            },
                        },
                        {
                            key: 'drawViewportIntersectionPoint',
                            value: function (t, e) {
                                var i = this.viewPort.bounds.intersectionPoint(t, this.viewPort.position, 20);
                                !1 !== i &&
                                    ((i = this.worldToScreen(i)).x < 5 ? (i.x += 1) : i.x > this.canvas.width - 5 && (i.x -= 2),
                                    i.y < 5 ? (i.y += 1) : i.y > this.canvas.height - 5 && (i.y -= 2),
                                    this.finalDrawFuncs.push(function () {
                                        e(i);
                                    }));
                            },
                        },
                        {
                            key: 'drawCircles',
                            value: function (t) {
                                var e = this;
                                N.values(this.jewelCircles).forEach(function (i) {
                                    var s = null,
                                        a = null;
                                    i.visual ? ((s = e.assets.get('jewelRadius', i.visual + 'JewelCircle1')), (a = e.assets.get('jewelRadius', i.visual + 'JewelCircle2'))) : ((s = e.assets.get('jewelRadius', 'JewelCircle1')), i.innerWidth && (a = e.assets.get('jewelRadius', 'JewelCircle1Inverse')));
                                    var n = Math.round(i.width),
                                        r = Math.round(n / 2);
                                    if ((t.drawImage(s, s.coords.x, s.coords.y, s.width, s.height, i.x - r, i.y - r, n, n), a)) {
                                        var o = n,
                                            l = r;
                                        i.innerWidth && !i.visual && ((o = Math.round(i.innerWidth)), (l = Math.round(o / 2))), t.drawImage(a, a.coords.x, a.coords.y, a.width, a.height, i.x - l, i.y - l, o, o);
                                    }
                                }),
                                    (this.jewelCircles = {});
                            },
                        },
                    ]),
                    t
                );
            })();
            return (E.CurrentVersion = T), E;
        }
    ),
    define('PoE/PassiveSkillTree/PassiveSkillTreeBuildControls', ['plugins', 'PoE/PassiveSkillTree/PassiveSkillTree', 'PoE/PassiveSkillTree/GenerateLink', 'PoE/Helpers'], function (t, e, i, s) {
        return function (a) {
            (this.init = function () {
                (this.$controlsForm = t('#passiveControlsForm')),
                    (this.$classStartPoint = t('#classStartPoint')),
                    (this.$ascendancyClass = t('#ascendancyClass')),
                    (this.$permaLink = t('#permaLink')),
                    (this.$toggleFullScreenEl = t('#toggleFullScreen')),
                    (this.$treeLinkEl = t('.tree-link')),
                    (this.$window = t(window)),
                    (this.$controlsContainerEl = t('#passiveSkillTreeControlsContainer')),
                    (this.$controlsEl = t('#passiveSkillTreeControls')),
                    (this.$buildControlsEl = t('#buildControls')),
                    (this.$treePointsContainerEl = null),
                    (this.$popupContainerEl = t('#poe-popup-container')),
                    (this.$higlightSimilarEl = t('#highlightSimilarNodes')),
                    (this.$highlightShortestPathsEl = t('#highlightShortestPaths')),
                    (this.$searchBoxEl = t('#passiveSearchBox')),
                    (this.$resetEl = t('#resetSkillTree')),
                    (this.curHistoryUrl = ''),
                    (this.skillTree = !1),
                    (this.height = a.height),
                    (this.fullScreen = !!a.fullScreen),
                    (this.startClass = a.startClass),
                    (this.passiveSkillTreeData = a.passiveSkillTreeData),
                    (this.version = a.version),
                    (this.realm = a.realm),
                    (this.buildUrl = a.build ? a.build.id : null),
                    (this.buildTitle = a.build ? a.build.title : null),
                    (this.builds = (a.build && a.build.parts) || []);
                var n = this;
                window.top.location != document.location && (this.$treeLinkEl.show(), this.$toggleFullScreenEl.hide()), this.fullScreen && this.$toggleFullScreenEl.hide();
                var r = function () {
                    window.open(n.curHistoryUrl);
                };
                (this.setAscendancyOptions = function (e) {
                    for (var i in (n.$ascendancyClass.empty(), n.$ascendancyClass.append(t('<option></option>').attr('value', 0).text(s.translate('None'))), n.passiveSkillTreeData.classes[e].ascendancies)) {
                        var a = parseInt(i) + 1,
                            r = t('<option></option>').attr('value', a).text(n.passiveSkillTreeData.classes[e].ascendancies[i].name);
                        n.skillTree.ascendancyClass && a == n.skillTree.ascendancyClass && r.attr('selected', !0), n.$ascendancyClass.append(r);
                    }
                }),
                    (this.setCurrentBuildIndex = function (t) {
                        if ((n.$buildControlsEl.find('ul.options > li > a').removeClass('active'), n.$buildControlsEl.find('ul.options > li > a[data-index=' + t + ']').addClass('active'), t < n.builds.length)) {
                            var e = n.builds[t];
                            n.skillTree.reset(e), n.skillTree.passiveAllocation.loadHashArray(e.hashes, e.hashes_ex || [], e.mastery_effects || {});
                        }
                    }),
                    (this.skillTree = new e('passiveSkillTree', 'poe-popup-container', this.fullScreen ? n.$window.width() : 916, this.fullScreen ? n.$window.height() : this.height, this.startClass, this.passiveSkillTreeData, {
                        events: {
                            classChosen: function (t, e) {
                                n.$classStartPoint.val(t), n.setAscendancyOptions(t);
                            },
                            historyUrlSet: function (t) {
                                (n.curHistoryUrl = t), n.$treeLinkEl.off('click').on('click', r);
                            },
                            buildUrlSet: function (t) {
                                n.buildUrl = t;
                            },
                            onload: function () {
                                setTimeout(function () {
                                    n.$controlsEl.slideDown(500);
                                }, 500),
                                    n.buildUrl && (n.$buildControlsEl.find('h2').text(n.buildTitle), n.$buildControlsEl.slideDown(500));
                            },
                            onFullScreenUpdate: function () {
                                return n.$buildControlsEl.css('height', n.$window.height() - n.$controlsEl.height()), n.$controlsEl.css('width', n.$window.width()), { top: '0px', left: '0px', width: n.$window.width(), height: n.$window.height() - n.$controlsEl.height() };
                            },
                            onFullScreenBegin: function () {
                                (n.$treePointsContainerEl = t('#treePointsContainer')),
                                    n.$popupContainerEl.append(n.$treePointsContainerEl),
                                    n.$popupContainerEl.append(n.$controlsEl),
                                    n.$popupContainerEl.append(n.$buildControlsEl),
                                    n.$popupContainerEl.addClass('fullscreen'),
                                    n.$controlsEl.css('width', n.$window.width()).css('position', 'fixed').css('bottom', '0px').css('left', '0px').css('z-index', 1e3),
                                    n.$buildControlsEl
                                        .css('height', n.$window.height() - n.$controlsEl.height())
                                        .css('position', 'fixed')
                                        .css('top', '0px')
                                        .css('bottom', '0px')
                                        .css('left', '0px')
                                        .css('z-index', 1005),
                                    n.$toggleFullScreenEl.val(s.translate('Exit Full Screen (f)'));
                            },
                            onFullScreenEnd: function () {
                                n.$controlsEl.css('width', 'auto').css('position', 'relative'), n.$buildControlsEl.css('height', 'auto').css('position', 'relative'), n.$controlsContainerEl.append(n.$controlsEl), n.skillTree.containerEl.append(n.$buildControlsEl), n.skillTree.containerEl.append(n.$treePointsContainerEl), n.$popupContainerEl.removeClass('fullscreen'), n.$toggleFullScreenEl.val(s.translate('Full Screen (f)'));
                            },
                        },
                        fullscreen: n.fullScreen,
                        noFullscreenKey: n.fullScreen,
                        realm: n.realm,
                        version: n.version,
                        buildUrl: n.buildUrl,
                        readonly: !!n.buildUrl,
                        treeControls: this,
                    })),
                    this.skillTree.loadStateFromUrl(),
                    this.setCurrentBuildIndex(0),
                    this.$classStartPoint.change(function (t) {
                        n.skillTree.reset({ characterClass: t.target.value, ascendancyClass: 0, accountName: null, characterName: null });
                    }),
                    this.$ascendancyClass.change(function (t) {
                        n.skillTree.reset({ characterClass: n.skillTree.characterClass, ascendancyClass: t.target.value, accountName: null, characterName: null });
                    }),
                    this.$resetEl.click(function (t) {
                        n.skillTree.reset({ accountName: null, characterName: null });
                    }),
                    this.$toggleFullScreenEl.click(function (t) {
                        n.skillTree.toggleFullScreen();
                    }),
                    this.$permaLink.click(function () {
                        n.$permaLink.select();
                    }),
                    n.skillTree.isHistorySupported() || n.$permaLink.hide(),
                    this.$higlightSimilarEl.change(function (t) {
                        n.skillTree.settings.highlightSimilarNodes = n.$higlightSimilarEl.is(':checked');
                    }),
                    this.$highlightShortestPathsEl.change(function (t) {
                        n.skillTree.settings.highlightShortestPaths = n.$highlightShortestPathsEl.is(':checked');
                    }),
                    this.$searchBoxEl.keypress(function (t) {
                        t.stopPropagation();
                    }),
                    this.$searchBoxEl.keyup(function (t) {
                        n.skillTree.highlightSearchQuery(n.$searchBoxEl.val());
                    }),
                    t.each(this.builds, function (e, s) {
                        s.realm = n.realm;
                        var a = i(0, s),
                            r = t('<li>').append(t('<a>').attr('href', a).text(s.label).attr('data-index', e));
                        n.$buildControlsEl.find('ul.options').append(r);
                    }),
                    this.$buildControlsEl.on('click', 'a', function (e) {
                        var i = t(this).attr('data-index');
                        n.setCurrentBuildIndex(i), e.preventDefault();
                    });
            }),
                this.init();
        };
    }),
    define('skilltree', ['PoE/PassiveSkillTree/PassiveSkillTree', 'PoE/PassiveSkillTree/PassiveSkillTreeBuildControls'], function (t, e) {
        return { view: t, controls: e };
    });
