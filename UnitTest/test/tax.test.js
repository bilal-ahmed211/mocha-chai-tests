var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
// var projection = require('');
var projectionsTest = require('./getProjection')

    describe("Projection Engine", function () {
        it("should return an object", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections).to.be.an('object')
                done();
            });
        });
        t("should return an object", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections).to.be.an('object')
                done();
            });
        });
        it("validate current file's status is Married!", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.isMarried).to.be.true;
                done();
            });
        });
        it("should return correct start YEAR based on projection date selected!", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.startYear).to.deep.equal(2026);
                expect(projections.startYear).to.not.be.null;
                done();
            });
        });
        it("should return correct Retirement MONTH - Matches tab1 input fields", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.retirementMonth).to.deep.equal(0);
                expect(projections.retirementMonth).to.not.be.null;
                done();
            });
        });
        it("should return correct Retirement YEAR - Matches tab1 input fields", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.retirementYear).to.deep.equal(2026);
                expect(projections.retirementYear).to.not.be.null;
                done();
            });
        });
        it("Projection's End YEAR for the given file is correct", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.originalEndYear).to.deep.equal(2061);
                expect(projections.originalEndYear).to.not.be.null;
                done();
            });
        });
        it("Beginning Retirement Funds Value being calculated & returned should be correct based on given data", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.begnningAccountBalanceGaranteedAccounts).to.not.be.null;
                expect(projections.begnningAccountBalanceGaranteedAccounts).to.deep.equal(950000);  
                done();
            });
        });
        it("Beginning Annuity Account (GIBs) Value being calculated & returned is correct", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.begnningAccountBalanceGaranteedAccounts).to.not.be.null;
                expect(projections.begnningAccountBalanceGaranteedAccounts).to.deep.equal(100000);  
                done();
            });
        });
        it("Beginning Portfolio Total (Retirement Accounts + GIBs) Value is correct", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.begnningAccountBalance).to.not.be.null;
                expect(projections.begnningAccountBalance).to.deep.equal(1050000);  
                done();
            });
        });
        it("Verify there are no contributions in the current file", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.currentContributions).to.deep.equal(0);  
                done();
            });
        });
        it("Verify the calculated 'Retirement Funds Balance' at Retirement is correct!!", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.balanceAtRetirementRetirementFunds).to.not.be.null;
                expect(projections.balanceAtRetirementRetirementFunds).to.deep.equal(1153779.91000304);  
                done();
            });
        });
        it("Verify the calculated 'Annuity Account Balance' at Retirement is correct!!", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                assert.isNotNull(projections.balanceAtRetirementGuaranteedAccounts, 'Annuity account value is avaliable')
                expect(projections.balanceAtRetirementGuaranteedAccounts).to.deep.equal(93206.534790699);  
                done();
            });
        });
        it("Verify the Yellow Line Month/Year for Minimum Retirement Funds on tab-2 is December 2059!", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.yellowLineMonthForPrint).to.deep.equal(11);  
                expect(projections.yellowLineYearForPrint).to.deep.equal(2059);  
                done();
            });
        });
        it("Red Line Month/Year and/or Retirement Funds Ends in June 2060!", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections.redLineMonthForPrint).to.deep.equal(5);  
                expect(projections.redLineYearForPrint).to.deep.equal(2060);  
                done();
            });
        });  
        it("Red Line check should be false in 2018 as there are sufficient Funds available!", function (done) {
            projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                expect(projections[2018].redLine).to.be.false;
                done();
            });
        });  
    })
    //Data Validatioin in Each Projection Years!!
    describe("Projection Years Analysis", function () {
        describe("#2018 - Data Validation Based on the given file's Data", function(){
            it("should return an object", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].tax).to.be.an('object');
                    done();   
                });
            });
            it("should not have Red Line in Pre-Retirement!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].redLine).to.be.false;
                    done();
                });
            });
            it("Yellow Line check should return false!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].yelloowLine).to.be.false;
                    done();
                });
            });
            it("SNP Red Line on tab-9 should be false in 2018!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].redSNPLine).to.be.false;
                    done();
                });
            });
            it("Verify the Bond Breach Alert is disabled!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].redSNPLine).to.be.false;
                    done();
                });
            });
            it("Verify the reInveest RMD checkbox is CHECKED!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].reinvestRMD).to.be.true;
                    done();
                });
            });
            it("Verify the Pay Tax with RMD checkbox is CHECKED!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].payTaxWithRmd).to.be.true;
                    done();
                });
            });
            it("Verify the Pay Expense with RMD checkbox is CHECKED!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].payExpenseWithRmd).to.be.true;
                    done();
                });
            });
            it("Verify the total Social Security Benefit this year is Zero!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].totalSocialSecurity).to.deep.equal(0);
                    done();
                });
            });
            it("Verify the total Pension Benefit this year is Zero!", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].totalPension).to.deep.equal(0);
                    done();
                });
            });
            it("Verify the total Contributions (Taxable & Tax-Free) is Zero", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].totalContributions).to.deep.equal(0);
                    done();
                });
            });
            it("Verify the total Salary amount being calculated is correct", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].totalSalary).to.deep.equal(0);
                    done();
                });
            });
            it("Verify the total LTC in 2018 is Zero", function (done) {
                projectionsTest.getProjection('clientId', 'scenarioId', function (projections) {
                    expect(projections[2018].totalLTC).to.deep.equal(0);
                    done();
                });
            });
        //2018 Taxable Income based on the data entries in input tabs of the given scenario
        describe("Taxable Income - 2018", function(){
            it("Includes correct Annual salary/wages amount in taxable federal Gross Income", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].grossSalary).to.deep.equal(5000);
                    done();
                });
            });
            it("should have no taxable Social Security Benefits", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalTaxableSocialSecurity).to.deep.equal(0);
                    done();
                });
            });
            it("Verify there are no Pension Benefits in 2018", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].stateTaxFreePension).to.deep.equal(0)
                    expect(projections[2018].federalTaxFreePension).to.deep.equal(0)
                    done();
                });
            });
            it("Verify this file has No taxable Contributions", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalTaxableContributions).to.deep.equal(0)
                    expect(projections[2018].totalTaxFreeContributions).to.deep.equal(0)
                    done();
                });
            });
            it("Verify the 1099 Interest being returned in 2018 is correct & included in taxable Income", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].total1099Income).to.deep.equal(8.33333333333333)
                    done();
                });
            });
            it("Check Total Taxable withdrawals in 2018 - Includes Transfer from TIRA to Roth GIB", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalTaxableWithdrawals).to.deep.equal(100000)
                    done();
                });
            });
            it("Penalty Amount on withdrawals from Qulified Accounts before Age 59.5 - should be Zero", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalPenaltyAmount).to.deep.equal(0)
                    done();
                });
            });
            it("Verify this file has no taxable cash flows in 2018", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalCashFlows.taxed.inflow).to.deep.equal(0)
                    expect(projections[2018].totalTaxableAdvancedCashFlows).to.deep.equal(0)
                    done();
                });
            });
            it("Verify no RMD withdrawals available this year to be included in Taxable Income", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalRMDWithdrawals).to.deep.equal(0)
                    done();
                });
            });
            it("should not have include Previous Year Withdrawals in 2018 Taxable Income - should be Zero", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].previousYearWithdrawals).to.deep.equal(0)
                    done();
                });
            });
            it("should not have included Previous Year Tax in 2018 Taxable Income - should be Zero", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].previousYearTax).to.deep.equal(0)
                    expect(projections[2018].previousYear1099).to.deep.equal(0)
                    expect(projections[2018].previousYearAdjustment).to.deep.equal(0)
                    done();
                });
            });
        }); 
        //Retirement Funds 2018  
        describe("Retiremen Funds - 2018", function(){
            it("should retrun correct Starting Balance based on tab2 Data", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].wdpercent.start).to.deep.equal(950000)
                    done();
                });
            });
            it("Verify the Year End Retirement Funds Balance is correct", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].wdpercent.end).to.deep.equal(952447.916666667)
                    done();
                });
            });
            it("Verify the Starting Balance of Annuity Accounts is correct - GIBs Balance in 2018", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalGuaranteedFunds).to.deep.equal(100000)
                    done();
                });
            });
            it("Verify the Total Portfolio Value including Retirement Accounts + Gibs", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].previousYearRetirementFunds).to.deep.equal(1050000)
                    done();
                });
            });
            it("Verify the 2018's Total Ending Balance is correct", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].allRetirementFunds).to.deep.equal(1052447.91666667)
                    done();
                });
            });
            it("Verify the 2018's Ending Balance of Retirement Accounts ONLY, is correct!!", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalRetirementFundsOnly).to.deep.equal(952447.916666667)
                    done();
                });
            });
            it("Verify the annual Withdrawal percentage value in 2018 is Zero!!", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].withdrawalPercent).to.deep.equal(0)
                    done();
                });
            });
            it("Verify the required total RMD Amount is Zero in 2018!!", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalRMDAmounts).to.deep.equal(0)
                    done();
                });
            });
            it("Verify there no RMD withdrawals in 2018 - should be zero!!", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalRMDWithdrawals).to.deep.equal(0)
                    done();
                });
            });
            it("Verify there no Penalty amount on withdrawals in 2018 - should be zero!!", function (done) {
                projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                    expect(projections[2018].totalPenualtyAmount).to.deep.equal(0)
                    done();
                });
            })
        }); 
        //2018 Tax Calculation Based on the data in given Scenario 
        describe("Tax Calculation - 2018", function(){
                it("Federal Gross Income amount should be correct based on taxable Incomes", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.totalTaxableIncome).to.deep.equal(105008.333333333)
                       expect(projections[2018].tax.federalTaxableIncome).to.deep.equal(105008.333333333)
                       done();
                   });
               });
               it("FICA and Medicare tax amount is correct based on selected employment type", function (done) {
                    projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                        expect(projections[2018].incomeTax.totalFica.client).to.deep.equal(186)
                        expect(projections[2018].incomeTax.totalFica.spouse).to.deep.equal(124)
                        expect(projections[2018].incomeTax.totalMedicare).to.deep.equal(124)
                        done();
                    });
                });
               it("Verify the Standard Deduction amount is $24,000", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.deductions).to.deep.equal(24000)
                       done();
                   });
               });
               it("Verify the itemized deduction option is not selected", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       assert.isFalse(projections[2018].tax.isItemizedTaxDeduction)
                       done();
                   });
               });
               it("Verify the Total Taxable Income after deduction is calculated correctly!", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.grossTaxableIncome).to.deep.equal(81008.3333333333)
                       done();
                   });
               });
               it("Tax Bracket selected based on Total taxable Income is correct - 22%", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.taxBracket).to.deep.equal(22)
                       done();
                   });
               });
               it("Base Value based on the current tax bracket should be $77,400", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.taxBase).to.deep.equal(77400)
                       done();
                   });
               });
               it("Tax on Base should be calculated correctly - $8,907", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.taxOnBase).to.deep.equal(8907)
                       done();
                   });
               });
               it("'Income' Over-Base Value should be correct based on the Income & Base Value", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.incomeOverBase).to.deep.equal(3608.33333333333)
                       done();
                   });
               });
               it("'Tax On Income Over-Base Value' should be correct based on the Income & Base Value", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.overBase).to.deep.equal(793.83)
                       done();
                   });
               });
               it("#2018 Federal Tax should be the sum of BaseTax & tax-On-Amount-OverBase", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       var federalTax = projections[2018].tax.taxOnBase + projections[2018].tax.overBase;
                       expect(projections[2018].tax.federalTotal).to.deep.equal(9700.83)
                       expect(projections[2018].tax.federalTotal).to.deep.equal(federalTax)
                       done();
                   });
               });
               it("Validate the State Tax Rate based on select STATE", function (done) {
                   projectionsTest.getProjection(clientId, scenarioId, function (projections) {
                       expect(projections[2018].tax.stateTaxRate).to.deep.equal(2.58)
                       done();
                   });
               });
            });
        });
    })
    


   